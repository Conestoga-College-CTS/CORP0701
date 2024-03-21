"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mqttClient_1 = __importDefault(require("./service/mqttClient"));
const mqttHandler = new mqttClient_1.default();
