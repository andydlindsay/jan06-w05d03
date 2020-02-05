const { Client } = require('pg');
// const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
};

const client = new Client(config);
client.connect();

module.exports = client;
