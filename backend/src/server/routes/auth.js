const router = require('express').Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require("jsonwebtoken")
const { secretKey } = require('../../environment/vars')

module.exports = app => {     
    router.post("/login", (req, res, next) => { 
        passport.authenticate('local', 
            { session: false }, 
            (err, user, info) => { 
                if (err) { 
                    return res.status(500).json({ err })
                }

                if (!user) { 
                    const { message } = info
                    return res.status(401).json({ message })
                }
                
                const { _id } = user
                const token = jwt.sign({ _id }, secretKey, { expiresIn: '30m' })

                res.cookie('jwt', token, { 
                    httpOnly: false, 
                    secure: false
                })
                .status(200)
                .send({ mensagem: "login realizado com sucesso!" })

            })(req, res, next)
    })
    
    router.post("/register", (req, res) => { 
        const { password, name, email } = req.body

        // Senha é criptografada e o usuário adicionao ao banco de dados
        bcrypt.hash(password, saltRounds)
            .then(async (hash) => {
                await User.create({ name, email, password: hash }, (err, newUser) => { 
                    if (err) { 
                        console.log(err)
                        return res.status(400).json({ error: "Usuário já existe!" })
                    }
        
                    return res.json({ mensagem: "Usuário criado!" })
                })
            })
    })

    app.use("/auth", router)
}