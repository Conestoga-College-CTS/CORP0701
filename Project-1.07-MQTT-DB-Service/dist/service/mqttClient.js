"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = __importDefault(require("mqtt"));
const db_1 = __importDefault(require("../model/db"));
const config = require('../config.json');
class MqttHandler {
    constructor() {
        this.client = mqtt_1.default.connect(config.mqttBroker, { port: config.mqttPort });
        console.log("connecting...");
        this.client.on('connect', () => {
            console.log('Connected to MQTT Broker');
            this.client.subscribe(config.mqttTopic, (err) => {
                if (!err) {
                    console.log(`Subscribed to ${config.mqttTopic}`);
                }
            });
        });
        this.client.on('message', (topic, message) => __awaiter(this, void 0, void 0, function* () {
            console.log(`Message received on topic ${topic}`);
            const data = JSON.parse(message.toString());
            data.tag = topic;
            yield this.storeData(data);
        }));
    }
    storeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield (0, db_1.default)('telemetry').insert(data);
                console.log('Data stored:', data);
            }
            catch (error) {
                console.error('Error storing data:', error);
            }
        });
    }
}
exports.default = MqttHandler;
