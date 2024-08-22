const MoviesModel = require('../model/moviesModel');

const getAllMoviesInTheaters = async (req, res) => {
    try {
        const movies = await MoviesModel.getAllMoviesInTheaters();
        res.json(movies);
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllMoviesComingSoon = async (req, res) => {
    try {
        const movies = await MoviesModel.getAllMoviesComingSoon();
        res.json(movies);
    } catch (err) {
        console.error('Error retrieving movies:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAnEspecificMovieInfo = async (req, res) => {
    const { movieId } = req.params;
    try {
        const movie = await MoviesModel.getAnEspecificMovieInfo(movieId);
        if (movie.length > 0) {
            res.json(movie[0]);
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





