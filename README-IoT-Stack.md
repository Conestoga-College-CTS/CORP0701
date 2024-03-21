# Node.js IoT Services Suite

This repository houses a suite of Node.js programs written in TypeScript, designed to facilitate the collection, transmission, and accessibility of telemetry data from CODESYS PLCs to a Postgres database. The suite is composed of three primary services:

1. **OPC-MQTT-Service**: Interacts with PLCs using the OPC-UA protocol to fetch telemetry data and publishes this data to an MQTT broker for further processing. Project folder: [Project-1.05-OPC-MQTT-Service](/Project-1.05-OPC-MQTT-Service/README.md)

2. **MQTT-DB-Service**: Subscribes to the MQTT broker to receive telemetry data and stores it in a Postgres database for persistence and querying capabilities. Project folder: [Project-1.07-MQTT-DB-Service](/Project-1.07-MQTT-DB-Service/README.md)

3. **REST-Service**: Exposes a REST API endpoint to retrieve telemetry data from the database based on specific query parameters such as tag, start time, and end time. Project folder: [Project-1.04-REST-Service](/Project-1.04-REST-Service/README.md)

### Infrastructure

The services rely on a dockerized infrastructure defined in a [Project-1.06-Infrastructure/docker-compose.yml](/Project-1.06-Infrastructure/docker-compose.yaml) file, which includes the necessary components like 
1. MQTT broker (HiveMQ)
2. Postgres database,
3. Grafana instance for visualization purposes.

To run these services, ensure you have Docker and Docker Compose installed on your machine. Then, navigate to the root directory of this repository and run:

```bash
docker-compose up -d
```

![IoT Stack](/iot-stack.png "IoT STack")

### PLC Program

The CODESYS PLC program to run data simulation is available in this file [PROGRAM PLC_PRG.txt](/PROGRAM%20PLC_PRG.txt)