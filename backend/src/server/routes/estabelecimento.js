const router = require('express').Router()
const passport = require('passport')
const Estabelecimento = require('../../models/estabelecimento.model')

module.exports = app => {
    router.post('/create', (req, res) => {
        const { nome, cidade, estado } = req.body
        Estabelecimento.create({ nome, cidade, estado }, (err) => {
            if (err){
                console.log(err)
                return res.status(400).json({error: "Estabelecimento já existe!" })
            }

            return res.json({mensagem: "Estabelecimento Criado!"})
        })
    })

    router.get('/',  (req, res) => {
        Estabelecimento.find({}, (err, doc) => {
            if(err){
                console.log(err)
                return res.status(400).json({error: "Error"})
            }
            return res.status(200).json(doc)
        })
    })

    router.get('/:id',  (req, res) => {
        const { id } = req.params
        Estabelecimento.findById(id, (err, doc) => {
            if(err){
                console.log(err)
                return res.status(400).json({error: "error"})
            }
            return res.status(200).json(doc)
        })
    })

    router.put('/:id', (req, res) => {
        const { id } = req.params
        const { body: update } = req
        Estabelecimento.findByIdAndUpdate(id, update, (err) => {
            if(err){
                console.log(err)
                return res.status(400).json({error: "error"})
            }
            return res.status(200).json({ mensagem: "estabelecimento atualizado", update})
        })
    })

    router.delete('/:id', (req, res) => {
        const { id } = req.params
        Estabelecimento.deleteOne(id, (err) => {
            if(err){
                console.log(err)
                return res.status(400).json({error: "error"})
            }
            return res.status(200).json({ mensagem: "estabelecimento deletado" })
        })
    })

    const query = ""
    router()


    app.use('/estabelecimento', passport.authenticate('jwt', {session: false}), router)
}