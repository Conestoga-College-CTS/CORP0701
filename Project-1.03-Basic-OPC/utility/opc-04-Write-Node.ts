import {
  AttributeIds,
  MessageSecurityMode,
  OPCUAClient, ReadValueIdOptions, SecurityPolicy, UserIdentityInfoUserName, UserTokenType, WriteValueOptions
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
    endpointMustExist: false,
  };
  const client = OPCUAClient.create(options);
  
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

    const nodesToRead: ReadValueIdOptions[] = [
      { nodeId: "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorSpeed",
        attributeId: AttributeIds.Value 
      },
      { nodeId: "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorTemp",
        attributeId: AttributeIds.Value 
      },
      { nodeId: "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorRunning",
        attributeId: AttributeIds.Value 
      },  
    ];

    const nodeToWrite: WriteValueOptions = {
      nodeId: "ns=4;s=|var|CODESYS Control Win V3 x64.Application.PLC_PRG.MotorSpeedSet",
      attributeId: AttributeIds.Value,
      value: {value: {dataType: "Int16", value: 124}}
    }

    let writeResult = await session.write(nodeToWrite);
    console.log(writeResult.toString());
    
    await session.close();
    await client.disconnect();
    console.log("Disconnected from the server!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();