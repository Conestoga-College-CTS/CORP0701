import knex from 'knex';
import config from '../service/knexfile';

export interface DataModel {
  tag: string;
  timestamp: Date;
  value: number;
}

const db = knex(config);

export default db;