import {
  AttributeIds,
  ClientMonitoredItem,
  ClientSubscription,
  MessageSecurityMode,
  MonitoringParametersOptions,
  OPCUAClient, 
  SecurityPolicy, 
  TimestampsToReturn, 
  UserIdentityInfoUserName, 
  UserTokenType,
  makeBrowsePath
} from "node-opcua-client";


async function main(): Promise < void > {
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
  const client = OPCUAClient.create(options);
  
  const nodeIdToMonitor = "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorSpeed";
  const endpointUrl = "opc.tcp://localhost:4840"; // Replace with your server's endpoint URL

  try {
    await client.connect(endpointUrl);
    console.log("Connected to the server!");

    const userIdentity: UserIdentityInfoUserName = {
      type: UserTokenType.UserName,
      userName: "user",
      password: "user"
    };

    const session = await client.createSession(userIdentity);
    
    console.log("Session created!");

  
    const browsePath = makeBrowsePath("RootFolder", "/Objects/Server.ServerStatus.BuildInfo.ProductName");

    const result = await session.translateBrowsePath(browsePath);
    if(result && result.targets){
      const productNameNodeId = result.targets[0].targetId;
      console.log("Product Name nodeId = " + productNameNodeId.toString());
    }
    await session.close();
    await client.disconnect();
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();