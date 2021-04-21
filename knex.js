const knexfile = require('./knexfile')
const env = process.env.NODE_ENV;
const knex = require('knex')({
    client: knexfile.development.client,
    connection: process.env.DATABASE_URL || knexfile.development.connection,
  });

  module.exports = knex;