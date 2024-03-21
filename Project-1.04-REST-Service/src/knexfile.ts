import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 8432,
    user: 'adminuser',
    password: 'adminpassword',
    database: 'iotdb'
  }
};

export default config;