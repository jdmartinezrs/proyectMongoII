import { connect } from "../../helpers/connect.js";

/*Ejemplo*/
/**
 * 1.1 Class representing a connection to the 'pelicula' collection in the database.
 * @extends connect
 */
export class Pelicula extends connect {
    static instance; // Holds the singleton instance of the Pelicula class
    collection; // MongoDB collection for movies

    /**
     * Creates an instance of the Pelicula class.
     * @constructor
     */
    constructor() {
        super(); // Call the parent class constructor
        this.collection = this.db.collection('pelicula'); // Initialize the 'pelicula' collection
        Pelicula.instance = this; // Set the singleton instance
        return this; // Return the instance of the class
    }


    

    /**
 * Retrieves information about all movies currently in theaters along with their scheduled showtimes.
 * 
 * @async
 * @function
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing movie information and showtimes.
 */
async getAllMoviesAndFunctionsInfo() {
    let res = await this.collection.aggregate([
        // Match documents in the movie collection with the status 'En cartelera' (In theaters)
        {
            $match: { estado: "En cartelera" } // ! it matches movies with "En cartelera" status , feel free to look for "Próximamente" or "Retirada de Cartelera" 
        },
        // Perform a lookup to join the movie collection with the showtimes collection
        {
            $lookup: {
                from: "funcion", // The showtimes collection
                localField: "_id", // Field in the movie collection
                foreignField: "id_pelicula", // Field in the showtimes collection
                as: "funciones" // Alias for the result of the join
            }
        },
        // Unwind the funciones array to output individual showtime documents
        {
            $unwind: "$funciones"
        },
        // Project the desired fields in the result
        {
            $project: {
                _id: 0, // Exclude the _id field from the result
                titulo: 1, // Include the movie title
                genero: 1, // Include the movie genre
                duracion: 1, // Include the movie duration
                estado: 1, // Include the movie status
                "sala": "$funciones.sala", // Include the showtime room
                "funciones.fecha_hora_inicio": 1, // Include the showtime start date and time
                "funciones.fecha_hora_fin": 1 // Include the showtime end date and time
            }
        }
    ]).toArray();
    
    // Close the database connection
    this.conexion.close();
    
    // Return the result with movie information and showtimes
    return res;
}



 


   /**
 * 1.2 Retrieves specific information about a movie along with its scheduled showtimes.
 * 
 * @async
 * @function
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing movie information and showtimes.
 */
async getAnEspecificMovieInfo() {
    let res = await this.collection.aggregate([
        // Match documents in the movie collection with the title 'El Gran Escape'
        {
            $match: { titulo: 'El Gran Escape' }// !here you inser the "movie title", to see the information about it 
        },
        // Perform a lookup to join the movie collection with the showtimes collection
        {
            $lookup: {
                from: "funcion", // The showtimes collection
                localField: "_id", // Field in the movie collection
                foreignField: "id_pelicula", // Field in the showtimes collection
                as: "funciones" // Alias for the result of the join
            }
        },
        // Unwind the funciones array to output individual showtime documents
        {
            $unwind: "$funciones"
        },
        // Project the desired fields in the result
        {
            $project: {
                _id: 0, // Exclude the _id field from the result
                titulo: 1, // Include the movie title
                genero: 1, // Include the movie genre
                duracion: 1, // Include the movie duration
                estado: 1, // Include the movie status
                "sala": "$funciones.sala", // Include the showtime room
                "funciones.fecha_hora_inicio": 1, // Include the showtime start date and time
                "funciones.fecha_hora_fin": 1 // Include the showtime end date and time
            }
        }
    ]).toArray();
    
    // Close the database connection
    this.conexion.close();
    
    // Return the result with movie information and showtimes
    return res;
}

    
    
}