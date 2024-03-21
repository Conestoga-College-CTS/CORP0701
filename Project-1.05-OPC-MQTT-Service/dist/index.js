"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OPCUA_1 = require("./class/OPCUA");
const MQTT_1 = require("./class/MQTT");
// const config = JSON.parse(readFileSync("./config.json", "utf8"));
const config_json_1 = __importDefault(require("./config.json"));
const mqttClient = new MQTT_1.MQTTClient(config_json_1.default.mqtt);
const opcuaClient = new OPCUA_1.OPCUA(config_json_1.default.opcua.endpoint, config_json_1.default.opcua.subscription, config_json_1.default.opcua.monitoredItems, config_json_1.default.opcua.userIdentity, mqttClient);
opcuaClient.connectAndMonitor().then(() => {
    console.log("Monitoring OPC UA and publishing to MQTT.");
});
