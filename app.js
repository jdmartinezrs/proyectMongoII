const express = require("express");
const path = require('path');
const app = express();
const MoviesController = require('./server/controllers/moviesController');
const SeatsController = require('./server/controllers/seatsController');

// Importar los routers desde router.js
const { router } = require("./server/router");

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Rutas de la API
app.use('/', router);
// app.use('/movies', router);
// app.use('/seats', router);
// Middleware para manejar errores 403



// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).json({ message: "Recurso no encontrado" });
});

// Configuración del servidor
const config = {
    port: process.env.EXPRESS_PORT || 5069, 
    host: process.env.EXPRESS_HOST || 'localhost' 
};

// Iniciar el servidor
app.listen(config.port, config.host, () => {
    console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
});


