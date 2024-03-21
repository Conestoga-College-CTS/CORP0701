import * as opcua from "node-opcua-client"; 
import { MQTTClient } from "./MQTT"; // Assuming MQTT.ts is in the same directory
import {
  IEndpointConfig,
  ISubscriptionConfig,
  IMonitoredItemConfig,
  IUserIdentityConfig,
} from "../interface/IOPCUAConfig";

export class OPCUA {
  private client: opcua.OPCUAClient;
  private mqttClient: MQTTClient;

  constructor(
    private endpointConfig: IEndpointConfig,
    private subscriptionConfig:ISubscriptionConfig,
    private monitoredItemConfig: IMonitoredItemConfig,
    private userIdentityConfig: IUserIdentityConfig,
    mqttClient: MQTTClient
  ) {
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

  public async connectAndMonitor(): Promise < void > {
    try {
      await this.client.connect(this.endpointConfig.url);

      const userIdentity: opcua.UserIdentityInfoUserName = {
        type: opcua.UserTokenType.UserName,
        userName: this.userIdentityConfig.username,
        password: this.userIdentityConfig.password
      };

      const session = await this.client.createSession(userIdentity);
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
        const monitoredItem = opcua.ClientMonitoredItem.create(
          subscription, {
            nodeId: item.nodeId,
            attributeId: opcua.AttributeIds.Value
          },
          item.parameters,
          opcua.TimestampsToReturn.Both
        );

        monitoredItem.on("changed", (dataValue: opcua.DataValue) => {
          console.log("Data changed:", dataValue.value.toString());
          this.mqttClient.publish(item.mqttTopic, {value: dataValue.value.value, timestamp: dataValue.sourceTimestamp});
          console.log("Published to MQTT Broker");
        });
      });
    } catch (error) {
      console.error("Failed to connect and monitor OPC UA:", error);
    }
  }
}