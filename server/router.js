const express = require('express');
const router = express.Router();
const path = require('path');
const MoviesController = require('../server/controllers/moviesController');
const SeatsController = require('../server/controllers/seatsController');

// Definir las rutas
router.get("/index2", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index2.html'));
});

router.get("/asientos", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/asientos.html'));
});

router.get('/movies/in-theaters', MoviesController.getAllMoviesInTheaters);
router.get('/movies/coming-soon', MoviesController.getAllMoviesComingSoon);
router.get('/movies/:movieId', MoviesController.getAnEspecificMovieInfo);

/*-------------------------------SEATS----------------------------*/
router.get('/seats/:movieId/:dayOfWeek', SeatsController.getMovieShowByDay);
router.post('/seats/:showId/seatsToReserve', SeatsController.setASeatBooking);
router.post('/seats/:showId/seats/:seatId/remove', SeatsController.removeASeatReservation);

module.exports = {
    router
};
