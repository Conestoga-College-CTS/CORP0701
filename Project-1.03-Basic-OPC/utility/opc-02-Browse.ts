/**
 * Program to connect to the OPC Server and retrieve endpoints.
 */

import {
  ApplicationType,
  coerceMessageSecurityMode,
  coerceSecurityPolicy,
  MessageSecurityMode,
  OPCUAClient,
  OPCUAClientOptions,
  SecurityPolicy,
} from "node-opcua";

// Connection Strategy
const connectionStrategy = {
  initialDelay: 2000,
  maxDelay: 10 * 1000,
  maxRetry: 10
}


const options = {
  applicationName: "MyClient",
  connectionStrategy: connectionStrategy,
  securityMode: MessageSecurityMode.None,
  securityPolicy: SecurityPolicy.None,
  endpoint_must_exist: false,
};

async function main(){
  const client = OPCUAClient.create(options);
  // const endpointUrl = "opc.tcp://opcuademo.sterfive.com:26543";
  const endpointUrl = "opc.tcp://ZTODTENGIOT-18:4840";

  client.on("backoff", (retry: number, delay: number) => {
    console.log(`backoff  attempt # , ${retry}, retrying in , ${delay} / 1000.0, seconds`);
  });

  console.log(`connecting to ${endpointUrl}`);

  try {
    await client.connect(endpointUrl);
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