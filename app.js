const express = require("express");
const path = require('path');
const app = express();
const MoviesController = require('./server/controllers/moviesController');
const SeatsController = require('./server/controllers/seatsController');

// Importar los routers desde router.js
const { router } = require("./server/router");

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Rutas de la API
app.use('/movies', router);
app.use('/SeatsModel', router);
// Middleware para manejar errores 403
app.use((req, res, next) => {
    res.status(403).json({ message: "No tiene autorización" });
});

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).json({ message: "Recurso no encontrado" });
});

// Configuración del servidor
const config = {
    port: process.env.EXPRESS_PORT || 3000, 
    host: process.env.EXPRESS_HOST || 'localhost' 
};

// Iniciar el servidor
app.listen(config.port, config.host, () => {
    console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
});