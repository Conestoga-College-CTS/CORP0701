// A program to connect to a mqtt broker and subscribe to a topic

import * as mqtt from 'mqtt';

// MQTT Broker URL
const brokerUrl = 'mqtt://localhost:6883';

const publishTopic = 'your/topic/some';
let isDisconnecting = false;

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

    // Publish to topic every 5 seconds 
    setInterval(async () => {
      if (!isDisconnecting) {
        console.log(`Publishing to topic: ${publishTopic}`);
        const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
        await client.publishAsync(publishTopic, getRandomNumber().toString(), { qos: 2 });
      } else {
        console.log('Cannot publish, client is disconnecting...');       
      }
      if (client.disconnected) {
        return;
      }
    }, 5000);

    // Graceful shutdown on SIGINT
    process.on('SIGINT', () => {
      isDisconnecting = true;
      console.log('Disconnecting...');
      client.end();
      process.exit(0);
    });  
  } catch(err: unknown) {
    console.error(err);
  }
})();



