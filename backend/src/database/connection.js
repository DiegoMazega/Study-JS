/**
 * Cria a configuração de conexão do banco de dados com o Knex
 */

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;