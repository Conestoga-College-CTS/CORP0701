"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPCUA = void 0;
const opcua = __importStar(require("node-opcua-client"));
class OPCUA {
    constructor(endpointConfig, subscriptionConfig, monitoredItemConfig, userIdentityConfig, mqttClient) {
        this.endpointConfig = endpointConfig;
        this.subscriptionConfig = subscriptionConfig;
        this.monitoredItemConfig = monitoredItemConfig;
        this.userIdentityConfig = userIdentityConfig;
        this.client = opcua.OPCUAClient.create({
            applicationName: "MyClient",
            connectionStrategy: {
                initialDelay: 2000,
                maxDelay: 10 * 1000,
                maxRetry: 10
            },
            securityMode: opcua.MessageSecurityMode.None,
            securityPolicy: opcua.SecurityPolicy.None,
            endpointMustExist: false,
        });
        this.mqttClient = mqttClient;
    }
    connectAndMonitor() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect(this.endpointConfig.url);
                const userIdentity = {
                    type: opcua.UserTokenType.UserName,
                    userName: this.userIdentityConfig.username,
                    password: this.userIdentityConfig.password
                };
                const session = yield this.client.createSession(userIdentity);
                console.log("Session created.");
                const subscription = opcua.ClientSubscription.create(session, this.subscriptionConfig.parameters);
                console.log("Subscription created.");
                subscription.on("started", () => {
                    console.log("Subscription started - subscriptionId=", subscription.subscriptionId);
                }).on("keepalive", () => {
                    console.log("Subscription keepalive");
                }).on("terminated", () => {
                    console.log("Subscription terminated");
                });
                this.monitoredItemConfig.items.forEach((item) => {
                    // const item = this.monitoredItemConfig.items[0];
                    const monitoredItem = opcua.ClientMonitoredItem.create(subscription, {
                        nodeId: item.nodeId,
                        attributeId: opcua.AttributeIds.Value
                    }, item.parameters, opcua.TimestampsToReturn.Both);
                    monitoredItem.on("changed", (dataValue) => {
                        console.log("Data changed:", dataValue.value.toString());
                        this.mqttClient.publish(item.mqttTopic, { value: dataValue.value.value, timestamp: dataValue.sourceTimestamp });
                        console.log("Published to MQTT Broker");
                    });
                });
            }
            catch (error) {
                console.error("Failed to connect and monitor OPC UA:", error);
            }
        });
    }
}
exports.OPCUA = OPCUA;
