const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//import de rota
const estabelecimento = require('./src/routes/estabelecimento.route');
const app = express();

app.use('/estabelecimento', estabelecimento);

const { URL_PORT } = process.env;
app.listen(URL_PORT, () => {
    console.log(`Aplicação conectada na porta ${URL_PORT}`)
});

