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

Router.get('/users', (req, res) => {
    userSchema  // Promesa
    .find() // encuentra los valores
    .then((data)=> res.send(data))
    .catch((error)=> res.json({ErrorMessage: error}))
    
});

Router.get('/users/:id', (req, res) => {
    const { id } = req.params; // Encuentra el id que se pone en la petición
    userSchema
    .findById(id) // encuentra el valor del id
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    
});

Router.put('/users/:id', (req, res) => {
    const { id } = req.params; // Encuentra el id que se pone en la petición
    const { userName, password, isVerified } = req.body;
    userSchema
    .updateOne({_id: id},{$set: {userName, password, isVerified}}) // encuentra el valor del id en el primer objeto y en el segundo se hacen los cambios con el objeto $set
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    
});

Router.delete('/users/:id', (req, res) => {
    const { id } = req.params; // Encuentra el id que se pone en la petición
    
    userSchema
    .deleteOne({ _id: id }) // encuentra el valor del id
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    
});

module.exports = Router;