const mongoose = require('mongoose');
const bcryot = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
})

userSchema.method('compare', async (loginPass, dbPass) => {
    return bcryot.compare(loginPass, dbPass)
})

const User = mongoose.model("User", userSchema)

module.exports = User;