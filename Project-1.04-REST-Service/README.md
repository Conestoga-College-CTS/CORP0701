# Telemetry Service

This project provides a RESTful API service built with Express.js and TypeScript to retrieve telemetry data from a PostgreSQL database. It allows querying telemetry records by tag and a specified timestamp range.

## Features

- Fetch telemetry data filtered by tag and timestamp range.
- Uses Knex.js for query building to interact with PostgreSQL.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Running

1. Build

   ```bash
   npm run build
   ```

2. Run

   ```bash
   npm start
   ```

### Testing

To verify the service is working as expected, you can use the following URL in your web browser, with a REST client like Postman, or with a command-line tool like curl:

http://localhost:9000/telemetry?tag=plc_1/ramp&startTimestamp=2022-01-01T00:00:00Z&endTimestamp=2022-01-02T00:00:00Z
