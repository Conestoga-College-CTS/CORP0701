import mqtt from 'mqtt';
import db, { DataModel } from '../model/db';
const config = require('../config.json');

class MqttHandler {
  private client = mqtt.connect(config.mqttBroker, {port: config.mqttPort});

  constructor() {
    console.log("connecting...");
    this.client.on('connect', () => {
      console.log('Connected to MQTT Broker');

      this.client.subscribe(config.mqttTopic, (err) => {
        if (!err) {
          console.log(`Subscribed to ${config.mqttTopic}`);
        }
      });
    });

    this.client.on('message', async (topic, message) => {
      console.log( `Message received on topic ${topic}`);
      const data: DataModel = JSON.parse(message.toString());
      data.tag = topic;
      await this.storeData(data);
    });
  }

  private async storeData(data: DataModel): Promise<void> {
    try {
      await db('telemetry').insert(data);
      console.log('Data stored:', data);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }
}

export default MqttHandler;
