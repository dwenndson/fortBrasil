const express = require('express');
const router = express.Router();

const estabelecimento_controller = require('../controller/estabelecimento.controller');

router.get('/test', estabelecimento_controller.test);

module.exports = router;