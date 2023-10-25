const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
    }
});

module.exports = mongoose.model('User', userSchema) // Se crea el modelo de dato a partir de mi Esquema
