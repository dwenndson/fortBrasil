const express = require('express');
require('dotenv').config()

console.log(process.env.MONGO_URI)

const app = express();

app.get('/',(req, res) => {
    res.send('fortBrasil')
})
const { HTTP_PORT } = process.env
app.listen(HTTP_PORT, () => {
    console.log(`Aplicação conectada na porta ${HTTP_PORT}`)
})

