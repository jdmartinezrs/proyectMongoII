const Pelicula = require('./server/movies');
const Cliente = require('./server/clientRoles');
const Asiento = require('./server/seats')
const { ObjectId } = require("mongodb");



Pelicula.getInstance()
.then(peliculaInstance => {
    // Verifica si la instancia es válida
    if (!peliculaInstance) {
        throw new Error('Pelicula instance is not available');
    }

    // Llama al método con el estado deseado
    return peliculaInstance.getAllMoviesAndFunctionsInfo('En cartelera');
})
.then(moviesAndFunctions => {
    console.log('Movies and Functions Info:', moviesAndFunctions);
})
.catch(error => {
    console.error('Error initializing Pelicula:', error);
});
