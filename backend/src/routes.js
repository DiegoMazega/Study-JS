const express = require('express');

const routes = express.Router();
const crypto = require('crypto');

const ongController = require('./controllers/OngController');
const incidentsControllers = require('./controllers/IncidentController');
const profileControllers = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');
/**
 * Metodos HTTP:
 * GET: Busca uma informação no backend
 * POST: Cria uma informação no backend
 * PUT: Atualiza uma informação no backend
 * DELETE: Deleta uma informação no backend
 */
/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o simbolo de '?' 
 * eles também servem para filtros e paginação
 * 
 * Route Parms: Parâmetros utilizados para identificar recursos, exemplo: "/:id"
 * 
 * Request Body: Corpo da requisição usado para recuperar ou alterar informaçãos
 */

// Rota / Recurso


routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileControllers.index);

routes.post('/sessions', sessionController.create);

routes.get('/incidents', incidentsControllers.index);
routes.post('/incidents', incidentsControllers.create);
routes.delete('/incidents/:id', incidentsControllers.delete);

module.exports = routes;