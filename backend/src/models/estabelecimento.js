const mongoose = require('mongoose');

module.exports = mongoose.model('Estabelecimento', {
    nome: String,
    nomeFantasia: String,
    cidade: String,
    estado: String,
})