// A program to connect to a mqtt broker and subscribe to a topic

import * as mqtt from 'mqtt';

// MQTT Broker URL
const brokerUrl = 'mqtt://localhost:6883';

const subscribeTopic = 'your/topic';

(async function() {
  try {
    // Connect to the MQTT Broker
    const client = await mqtt.connectAsync(brokerUrl);
    console.log('Connected to the MQTT Broker!');

    client.on('connect', async () => {
      console.log('Connected!');
    });

    // Disconnect handler
    client.on('close', () => {
      console.log('Disconnected!');
    });
    
    // Handle incoming messages
    client.on('message', (topic, message) => {
      console.log(`Received message: ${message.toString()} on topic: ${topic}`);
    });

    // Subscribe to the topic
    await client.subscribeAsync(subscribeTopic, {qos: 2});    

    // Graceful shutdown on SIGINT
    process.on('SIGINT', () => {
      console.log('Disconnecting...');
      client.end();
    });

  } catch(err: unknown) {
    console.error(err);
  }
})();



