import {
  OPCUAClient,
  AttributeIds,
  ClientSubscription,
  TimestampsToReturn,
  MonitoringParametersOptions,
  ClientMonitoredItem,
} from "node-opcua-client";

// Define the node to monitor
const nodeIdToMonitor = "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorSpeed";
const endpointUrl = "opc.tcp://localhost:4840"; // Replace with your server's endpoint URL


async function monitorNodeValue(): Promise<void> {
  try {
    const client = OPCUAClient.create({ endpoint_must_exist: false });
    await client.connect(endpointUrl);
    console.log("Connected to the OPC UA server.");

    const session = await client.createSession();
    console.log("Session created.");

    const subscription = ClientSubscription.create(session, {
      requestedPublishingInterval: 1000,
      requestedLifetimeCount: 100,
      requestedMaxKeepAliveCount: 10,
      maxNotificationsPerPublish: 100,
      publishingEnabled: true,
      priority: 10,
    });

    console.log("Subscription created.");

    subscription.on("started", () => {
      console.log("Subscription started - subscriptionId=", subscription.subscriptionId);
    }).on("keepalive", () => {
      console.log("Subscription keepalive");
    }).on("terminated", () => {
      console.log("Subscription terminated");
    });

    const itemToMonitor: any = {
      nodeId: nodeIdToMonitor,
      attributeId: AttributeIds.Value,
    };

    const parameters: MonitoringParametersOptions = {
      samplingInterval: 100,
      discardOldest: true,
      queueSize: 10,
    };

    const monitoredItem = ClientMonitoredItem.create(
      subscription,
      itemToMonitor,
      parameters,
      TimestampsToReturn.Both
    );

    monitoredItem.on("changed", (dataValue) => {
      console.log("Value has changed:", dataValue.value.toString());
    });

    // Clean up and termination logic
    async function cleanup(): Promise<void> {
      await subscription.terminate();
      await session.close();
      await client.disconnect();
      console.log("Disconnected from the OPC UA server.");
    }

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);

  } catch (err) {
    console.error("An error occurred:", err);
  }
}

monitorNodeValue();
