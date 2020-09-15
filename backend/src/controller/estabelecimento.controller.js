var estabelecimentoModel = require('../models/estabelecimento.model');

exports.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        estabelecimentoModel.findById(req.params.estabelecimentoId, function(err, estabelecimentoInfo){
            if(err){
                next(err);
            } else {
                res.json({status: "success", mensagem: "estabelecimento Eecontrado", data: {
                    estabelecimentos: estabelecimentoInfo
                }});
            }
        });
    },
    
}