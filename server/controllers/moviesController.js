const MoviesModel = require('../model/moviesModel');

const getAllMoviesInTheaters = async (req, res) => {
    const moviesModel = new MoviesModel(); // Crear instancia de MoviesModel
    try {
        const movies = await moviesModel.getAllMoviesInTheaters(); // Obtener datos de la base de datos
        res.json(movies); // Enviar datos como respuesta
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllMoviesComingSoon = async (req, res) => {
    const moviesModel = new MoviesModel(); // Crear instancia de MoviesModel
    try {
        const movies = await moviesModel.getAllMoviesComingSoon(); // Obtener datos de la base de datos
        res.json(movies); // Enviar datos como respuesta
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAnEspecificMovieInfo = async (req, res) => {
    const moviesModel = new MoviesModel(); // Crear instancia de MoviesModel
    const { movieId } = req.params; // Obtener ID de la película desde los parámetros de la solicitud
    try {
        const movie = await moviesModel.getAnEspecificMovieInfo(movieId); // Obtener datos de la base de datos
        if (movie) {
            res.json(movie); // Enviar datos como respuesta
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
    } catch (err) {
        console.error('Error fetching movie details:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllMoviesInTheaters,
    getAllMoviesComingSoon,
    getAnEspecificMovieInfo
};
