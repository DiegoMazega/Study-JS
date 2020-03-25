/**
 * npm install nodemon
 * npm install knex
 * npm install cors
 */

//importa as funcionalidades do express pro node
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// uma variavel para instanciar a aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//ela ouvirá a porta 3333
app.listen(3333);