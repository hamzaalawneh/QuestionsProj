/* eslint-disable prettier/prettier */
const {Client} = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'hamzaalawneh',
  password: '',
  port: 5432,
});

client.connect();
module.exports = {
  client,
};
