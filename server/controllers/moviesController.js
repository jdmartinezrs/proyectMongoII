const {ObjectId} = require('mongodb');
const MoviesModel = require('../model/moviesModel');



const getAllMoviesInTheaters = async (req, res) => {
    const moviesModel = new MoviesModel(); // Crear instancia de MoviesModel
    try {
        const movies = await moviesModel.getAllMoviesInTheaters(); 
        res.json(movies); 
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllMoviesComingSoon = async (req, res) => {
    const moviesModel = new MoviesModel(); // Crear instancia de MoviesModel
    try {
        const movies = await moviesModel.getAllMoviesComingSoon(); 
        res.json(movies); 
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAnEspecificMovieInfo = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        if (!ObjectId.isValid(movieId)) {
            return res.status(400).json({ error: 'Invalid movie ID format' });
        }
        const moviesModel = new MoviesModel();  // Create an instance
        const movie = await moviesModel.getAnEspecificMovieInfo(new ObjectId(movieId));
        if (!movie) {
            return res.status(404).json({ error: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllMoviesInTheaters,
    getAllMoviesComingSoon,
    getAnEspecificMovieInfo
};
