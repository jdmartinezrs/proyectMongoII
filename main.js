

const { ObjectId } = require("mongodb");
const Connect = require("./server/index")
const seatId = "64a7e409f7a42a24c8d7e879";
const MoviesModel = require ('./server/model/moviesModel')


const moviesModel = new MoviesModel();

moviesModel.getAnEspecificMovieInfo('64dedf4e9b5f1f7b0f8a2c3d')
    .then(movieInfo => {
        console.log('Movie Details:', movieInfo);
    })
    .catch(error => {
        console.error('Error fetching movie details:', error);
    });

