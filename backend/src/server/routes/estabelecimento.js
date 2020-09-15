const router = require('express').Router()
const estabelecimento = require('../../models/estabelecimento.model')
const passport = require('passport')

const estabelecimentoController = require('../../controller/estabelecimento.controller');

router.route('/test')
    .get((req, res) => { res.json()}, estabelecimentoController.test)

module.exports = router
