const express = require('express');
const router = express.Router();
const MoviesController = require('../server/controllers/moviesController');
const SeatsController = require('../server/controllers/seatsController');
//const userValidationEmpty = require('../server/validator/userValidator')

// Definir las rutas
router.get('/in-theaters',  /*userValidationEmpty()*/ MoviesController.getAllMoviesInTheaters);
router.get('/coming-soon', MoviesController.getAllMoviesComingSoon);
router.get('/:movieId', MoviesController.getAnEspecificMovieInfo);

module.exports = {
    router
};


  /*-------------------------------SEATS----------------------------*/

router.get('/:movieId/:dayOfWeek', SeatsController.getMovieShowByDay);
router.post('/:showId/seatsToReserve', SeatsController.setASeatBooking);
router.post('/:showId/seats/:removeASeatReservation', SeatsController.removeASeatReservation);

module.exports = {
    router
};




















































// const express = require ('express')
// const router = express.Router();
// const path = require('path');
// const {getUserInfo} = require("./controllers/userController");
// const {userValidationEmpty}= require('./validator/userValidator')//añadir dato en el const

// router.get("/users", (req, res)=>{
//     res.sendFile(path.join(req.__dirname, process.env.EXPRESS_STATIC, 'views/user.html'))//si se crea o no el index 
// })
// //router.get('/users/v1',userValidationAll(), creatingUsers);// estar pendiente de userValidationRules
// router.get('/users/v1', userValidationEmpty(),getUserInfo);


// router.get('/',(req,res)=>{
//     res.sendFile('slamalenko')
// })


// module.exports= router;