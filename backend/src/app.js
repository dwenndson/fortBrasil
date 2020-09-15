const app = require('express')()
const consign = require('consign')

consign({ verbose: true, locale: 'pt-br', cwd: 'src' })
    .include('middlewares')
    .include('server')
    .into(app)