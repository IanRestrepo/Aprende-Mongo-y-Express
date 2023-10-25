const express = require('express');
const morgan = require('morgan'); // Requerimos morgan ( Esto no es necesario simplemente nos ayudara a ver las peticiones de una manera más sencilla )
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const app = express();
require('dotenv').config(); // Requerimos dotenv para poder utilizar nuestras variables de entorno

const PORT = process.env.PORT || 5000; // Detecta si hay una variable de entorno y si no simplemente utiliza el puerto 5000

// Default Middlewares

app.use(express.json());
app.use(morgan('dev'));
app.use('/api', userRoutes);

// Ruta de Bienvenida

app.get('/', (req, res) => {
    res.send('¡Bienvenido a CleoCode API!, si desea la información porfavor dirigase a /api/users');
})

// Connection with MongoDB
mongoose.connect(process.env.MONGODB_URI) // Promesa
.then(()=> console.log('MongoDB connection Succesfully done'))
.catch((error) => console.error(`Error while connect MongoDB ${error}`));

// Servidor Web

const server = app.listen(PORT, ()=> {
    console.log(`Aplication listening to port: http://localhost:${server.address().port}`);

}); 