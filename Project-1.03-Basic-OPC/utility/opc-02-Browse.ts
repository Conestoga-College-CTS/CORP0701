import {
  MessageSecurityMode,
  OPCUAClient, SecurityPolicy, UserIdentityInfoUserName, UserTokenType
} from "node-opcua-client";

async function browseNodeRecursively(session: any, nodeId: string, prefix: string = ''): Promise < void > {
  try {
    const browseResult = await session.browse(nodeId);
    for (let i = 0; i < browseResult.references.length; i++) {
      const reference = browseResult.references[i];
      const isLast = (i === browseResult.references.length - 1);
      const connector = isLast ? '└─' : '├─';
      const newPrefix = isLast ? `${prefix}   ` : `${prefix}│  `;

      console.log(`${prefix}${connector} ${reference.browseName.name} (${reference.nodeId.toString()})`);

      // Recursive call to browse children of the current node with new prefix
      await browseNodeRecursively(session, reference.nodeId, newPrefix);
    }
  } catch (err) {
    console.error("Browse failed:", err);
  }
}

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

    // Start browsing from the Objects folder (ns=0;i=85)
    // await browseNodeRecursively(session, "RootFolder");
    await browseNodeRecursively(session, "ns=0;i=85");

    await session.close();
    await client.disconnect();
    console.log("Disconnected from the server!");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

main();