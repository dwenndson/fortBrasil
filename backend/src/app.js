const app = require('express')()
const consign = require('consign')
const cors = require('cors')

app.use(cors());
consign({ verbose: true, locale: 'pt-br', cwd: 'src' })
    .include('middlewares')
    .include('server')
    .into(app)