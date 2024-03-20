/*
  Program to connect to OPC Server and get available endpoints.

*/
import {
  MessageSecurityMode,
  OPCUAClient,
  SecurityPolicy,
} from "node-opcua";

// Connection Option
const options = {
  applicationName: "MyClient",
  connectionStrategy: {
    initialDelay: 2000,
    maxDelay: 10 * 1000,
    maxRetry: 10
  },
  securityMode: MessageSecurityMode.None,
  securityPolicy: SecurityPolicy.None,
  endpoint_must_exist: false,
};

const endpointUrl = "opc.tcp://ZTODTENGIOT-18:4840";

async function main() {
  const client = OPCUAClient.create(options);

  client.on("backoff", (retry: number, delay: number) => {
    console.log(`backoff  attempt # , ${retry}, retrying in , ${delay} / 1000.0, seconds`);
  });

  try {
    console.log(`connecting to ${endpointUrl}`);
    await client.connect(endpointUrl);
    console.log(`connected!`);
  } catch (err: any) {
    console.log(`Cannot connect to ${endpointUrl}`);
    console.log(err);
    return;
  }

  const endpoints = await client.getEndpoints();
  console.log(JSON.stringify(endpoints, null, 2));

  await client.disconnect();
  console.log("Disconnected!");
  process.exit(0);
}

main();