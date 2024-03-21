# OPC-MQTT-Service

The OPC-MQTT-Service is a Node.js application responsible for fetching telemetry data from CODESYS PLCs using the OPC-UA protocol and publishing this data to an MQTT broker.

## Features

- OPC-UA client for communication with PLCs.
- MQTT publisher for transmitting data to an MQTT broker.

## Setup

To set up the service, ensure you have Node.js installed and then run:

```bash
npm install
```

Compile the TypeScript code with:

```bash
npm run build
```

Then start the service with:

```bash
npm start
```