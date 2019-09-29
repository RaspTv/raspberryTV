const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');

app.use('/', express.static('src/app/public'));

rotas(app);

module.exports=app;