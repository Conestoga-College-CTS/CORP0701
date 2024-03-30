// import { readFileSync } from "fs";
import { OPCUA } from "./class/OPCUA";
import { MQTTClient, MQTTConfig } from "./class/MQTT";
import { IEndpointConfig, ISubscriptionConfig, IMonitoredItemConfig, IUserIdentityConfig } from "./interface/IOPCUAConfig";

// const config = JSON.parse(readFileSync("./config.json", "utf8"));
import config from './config.json';

const mqttClient = new MQTTClient(config.mqtt as MQTTConfig);

const opcuaClient = new OPCUA(
  config.opcua.endpoint as IEndpointConfig,
  config.opcua.subscription as ISubscriptionConfig,
  config.opcua.monitoredItems as IMonitoredItemConfig,
  config.opcua.userIdentity as IUserIdentityConfig,
  mqttClient
);

opcuaClient.connectAndMonitor().then(() => {
    console.log("Monitoring OPC UA and publishing to MQTT.");
});
