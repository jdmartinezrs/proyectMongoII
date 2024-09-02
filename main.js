

const { ObjectId } = require("mongodb");
const Connect = require("./server/index")
const seatId = "64a7e409f7a42a24c8d7e879";
const MoviesModel = require ('./server/model/moviesModel')
const SeatsModel = require ('./server/model/seatsModel')

// const moviesModel = new MoviesModel();

// moviesModel.getAnEspecificMovieInfo('64dedf4e9b5f1f7b0f8a2c3d')
//     .then(movieInfo => {
//         console.log('Movie Details:', movieInfo);
//     })
//     .catch(error => {
//         console.error('Error fetching movie details:', error);
//     });



// Crea una instancia de la clase Movie


    // const movie = new SeatsModel();

    // const movieId = "64dedf4e9b5f1f7b0f8a2c3d"; // Reemplaza con el ID de tu película
    // const dayOfWeek = "Monday"; // Reemplaza con el día de la semana deseado

    // movie.getMovieShowByDay(movieId, dayOfWeek)
    //     .then(result => {
    //         console.log("Resultados:", result);
    //     })
    //     .catch(error => {
    //         console.error("Error:", error);
    //     })
    //     .finally(() => {
    //         client.close(); // Cierra la conexión a MongoDB, tanto en caso de éxito como de error
    //     });

        // const movie = new SeatsModel();

        // // Define los parámetros
        // const movieId = "64dedf4e9b5f1f7b0f8a2c3d"; // Reemplaza con el ID de tu película
        // const dayOfWeek = "Monday"; // Reemplaza con el día de la semana deseado

        // // Llama a la función getMovieShowByDay
        // movie.getMovieShowByDay(movieId, dayOfWeek)
        //     .then(result => {
        //         console.log("Resultados:", result);
        //         client.close(); // Cierra la conexión a MongoDB
        //     })
        //     .catch(error => {
        //         console.error("Error:", error);
        //         client.close(); // Cierra la conexión a MongoDB en caso de error
        //     });
        // const moviesModel = new SeatsModel();

        // const movieId = '64dedf4e9b5f1f7b0f8a2c3e'; // Reemplaza con el ObjectId real de la película
        // const dayOfWeek = 'Monday'; // Reemplaza con el día de la semana que te interese
        
       
        
        // moviesModel.getMovieShowByDay(movieId, dayOfWeek)
        //     .then(shows => {
        //         console.log('Movie shows for the specified day:', shows);
        //     })
        //     .catch(err => {
        //         console.error('Error retrieving movie shows:', err);
        //     });


            // const yourInstance = new SeatsModel();
        
            // const showId = '64dedf4e9b5f1f7b0f8a8006';
            // const seatsToReserve = ['M1'];
    
            // yourInstance.SetASeatBooking(showId, seatsToReserve)
            //     .then(result => {
            //         console.log('Seats reserved successfully:', result);
            //     })
            //     .catch(err => {
            //         console.error('Error reserving seats:', err);
            //     });


            const model = new SeatsModel();
        
            const showId = '64dedf4e9b5f1f7b0f8a8006';
            const seatsToRemove = ['M1'];
        
            model.removeASeatReservation(showId, seatsToRemove)
                .then(result => {
                    console.log('Seats removed successfully:', result);
                })
                .catch(err => {
                    console.error('Error removing seats:', err);
                });
