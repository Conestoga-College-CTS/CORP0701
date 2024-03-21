import * as opcua from "node-opcua-client";

export interface IEndpointConfig {
    url: string;
}

export interface IEndpointConfig {
    url: string;
}

export interface IUserIdentityConfig {
    username: string;
    password: string;
}

export interface ISubscriptionConfig {
    parameters: opcua.ClientSubscriptionOptions;
}

export interface IMonitoredItemConfig {
    items: { 
        nodeId: string; 
        parameters: opcua.MonitoringParametersOptions;
        mqttTopic: string;
    }[];
}
