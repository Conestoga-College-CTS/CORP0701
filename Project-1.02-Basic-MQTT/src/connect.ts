// A program to connect to a mqtt broker and subscribe to a topic

import * as mqtt from 'mqtt';

// MQTT Broker URL
const brokerUrl = 'mqtt://localhost:6883';

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

    // end connection
    // client.end();

    // Graceful shutdown on SIGINT
    process.on('SIGINT', () => {
      console.log('Disconnecting...');
      client.end();
    });

  } catch(err: unknown) {
    console.error(err);
  }
})();



