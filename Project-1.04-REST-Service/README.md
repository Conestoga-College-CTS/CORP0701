# Telemetry REST Service

This project provides a RESTful API service built with Express.js and TypeScript to retrieve telemetry data from a PostgreSQL database. It allows querying telemetry records by tag and a specified timestamp range.

## Features

- Fetch telemetry data filtered by tag and timestamp range.
- Uses Knex.js for query building to interact with PostgreSQL.


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

## Testing

To verify the service is working as expected, you can use the following URL in your web browser, or with a REST client like Postman, or with a command-line tool like curl:

http://localhost:9000/telemetry?tag=plc_1/ramp&startTimestamp=2024-01-01T00:00:00Z&endTimestamp=2024-01-02T00:00:00Z
