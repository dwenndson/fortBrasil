const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EstabelecimentoSchema = new Schema( {
    nome: {type:String, max:100},
    nomeFantasia: {type: String, max: 100},
    cidade: {type: String, max: 20, required:true},
    estado: {type: String, max: 2}
});

module.exports = mongoose.model('Estabelecimento', EstabelecimentoSchema)