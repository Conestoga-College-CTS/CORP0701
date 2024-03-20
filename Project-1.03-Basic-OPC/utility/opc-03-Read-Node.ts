import {
  AttributeIds,
  MessageSecurityMode,
  OPCUAClient, ReadValueIdOptions, SecurityPolicy, UserIdentityInfoUserName, UserTokenType
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

    let dataValue = await session.read(nodesToRead[0], 0);
    console.log(dataValue.toString());

    dataValue = await session.read(nodesToRead[1], 0);
    console.log(dataValue.toString());

    dataValue = await session.read(nodesToRead[2], 0);
    console.log(dataValue.toString());


    await session.close();
    await client.disconnect();
    console.log("Disconnected from the server!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();