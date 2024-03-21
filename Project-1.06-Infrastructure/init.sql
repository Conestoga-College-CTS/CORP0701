-- init.sql
CREATE TABLE IF NOT EXISTS telemetry (
    tag VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    value DOUBLE PRECISION,
    PRIMARY KEY (tag, timestamp)
);
