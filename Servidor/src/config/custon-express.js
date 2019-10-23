const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas');

const cors = require('cors');

app.use(cors());

app.use('/public', express.static('src/app/public'));
app.use('/', express.static('src/app/public'));


rotas(app);

module.exports=app;