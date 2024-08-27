// const {validationResult} = require ('express-validator');
// const UserDTO = require('../dto/userDto')
const SeatsModel = require('../model/seatsModel')


//const SeatsModel = require('../path/to/SeatsModel'); 

 getMovieShowByDay = async (req, res) => {
    try {
        const { movieId, dayOfWeek } = req.params;
        const seatsModel = new SeatsModel();  // Create an instance
        const shows = await seatsModel.getMovieShowByDay(movieId, dayOfWeek);
        res.json(shows);
    } catch (error) {
        console.error('Error in getMovieShowByDay:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
};

const setASeatBooking = async (req, res) => {
    const seatsModel = new SeatsModel();
    const { showId } = req.params; 
    const { seatsToReserve } = req.body; // Asumiendo que los asientos a reservar se envían en el cuerpo de la solicitud
    try {
        const result = await seatsModel.SetASeatBooking(showId, seatsToReserve);
        res.json(result);
    } catch (err) {
        console.error('Error in setASeatBooking:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const removeASeatReservation = async (req, res) => {
    const seatsModel = new SeatsModel();
    const { showId,seatsToRemove } = req.params; 
    try {
        const shows = await seatsModel.removeASeatReservation(showId,seatsToRemove);
        if (shows) {
            res.json(shows); // Enviar datos como respuesta
        } else {
            res.status(404).json({ error: 'Movie not found' });
        }
        return shows;
    } catch (err) {
        console.error('Error in removeASeatReservation:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        throw err;
    }
};

module.exports = {
    getMovieShowByDay,
    setASeatBooking,
    removeASeatReservation
};