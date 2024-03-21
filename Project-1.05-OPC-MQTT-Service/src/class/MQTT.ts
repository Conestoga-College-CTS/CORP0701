import * as mqtt from "mqtt";

export interface MQTTConfig {
  brokerUrl: string;
}

export class MQTTClient {
  private client: mqtt.MqttClient;

  constructor(private config: MQTTConfig) {
    this.client = mqtt.connect(this.config.brokerUrl);
  }

  public publish(topic: string, message: object): void {
    this.client.publish(topic, JSON.stringify(message), (err) => {
      if (err) {
        console.error("Failed to publish message:", err);
      }
    });
  }
}