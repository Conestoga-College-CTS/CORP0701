"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 8432,
        user: 'adminuser',
        password: 'adminpassword',
        database: 'iotdb'
    }
};
exports.default = config;
