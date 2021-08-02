const knex = require('knex');
const { development } = require('../knexfile');
const configuration = require('../knexfile');
const environment = process.env.NODE_ENV ;

module.exports = knex(configuration.development);