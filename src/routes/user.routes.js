const express = require('express');
const userSchema = require('../models/userSchema')
const Router = express.Router() // Importamos nuestro enrutador es lo mismo que la app.get o put etc, simplemente lo estamos declarando como rutas.

// Crear Usuario - Method POST

Router.post('/users', (req, res) => {
    const user = userSchema(req.body); // Recibe Valor de la petición

    user // Promesa
    .save()
    .then((data)=> res.send(data))
    .catch((error)=> res.json({message: error}))

});

module.exports = Router;