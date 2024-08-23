const express = require("express");
const path = require('path');
const app = express();

// Importar los routers desde router.js
const { router } = require("./server/router");

// Middleware para parsear JSON
app.use(express.json());

// Middleware para servir archivos estáticos
// Asegúrate de que la variable de entorno EXPRESS_STATIC esté definida correctamente
// app.use('/css', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'css')));
// app.use('/js', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'js')));
// app.use('/storage', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'storage')));

// Rutas de la API
app.use('/movies', router);

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
    port: process.env.EXPRESS_PORT || 3000, // Proporcionar un valor predeterminado si no está definido
    host: process.env.EXPRESS_HOST || 'localhost' // Proporcionar un valor predeterminado si no está definido
};

// Iniciar el servidor
app.listen(config.port, config.host, () => {
    console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
});