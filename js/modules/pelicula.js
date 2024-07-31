import { connect } from "../../helpers/connect.js";

/*Ejemplo*/
/**
 * 1.1 Class representing a connection to the 'pelicula' collection in the database.
 * @extends connect
 */
export class Pelicula extends connect {
    static instance;
    collection;

    /**
     * Creates an instance of the Pelicula class.
     * @constructor
     */
    constructor() {
        super();
        this.collection = this.db.collection('pelicula');
        Pelicula.instance = this;
        return this;
    }




    /**
 * Retrieves information about all movies currently in theaters along with their scheduled showtimes.
 * 
 * @async
 * @function
 * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing movie information and showtimes.
 */
    async getAllMoviesAndFunctionsInfo(status) {
        let res = await this.collection.aggregate([
            {
                $match: { estado: status }
            },
            {
                $lookup: {
                    from: "funcion",
                    localField: "_id",
                    foreignField: "id_pelicula",
                    as: "funciones"
                }
            },
            {
                $unwind: "$funciones"
            },
            {
                $project: {
                    _id: 0,
                    titulo: 1,
                    genero: 1,
                    duracion: 1,
                    estado: 1,
                    sala: "$funciones.sala",
                    "funciones.fecha_hora_inicio": 1,
                    "funciones.fecha_hora_fin": 1
                }
            }
        ]).toArray();

        this.conexion.close();

        return res;
    }







    /**
  * 1.2 Retrieves specific information about a movie along with its scheduled showtimes.
  * 
  * @async
  * @function
  * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing movie information and showtimes.
  */
    async getAnEspecificMovieInfo(nombre) {
        let res = await this.collection.aggregate([
            {
                $match: { titulo: nombre } // Usa el parámetro titulo
            },
            {
                $lookup: {
                    from: "funcion",
                    localField: "_id",
                    foreignField: "id_pelicula",
                    as: "funciones"
                }
            },
            {
                $unwind: "$funciones"
            },
            {
                $project: {
                    _id: 0,
                    titulo: 1,
                    genero: 1,
                    duracion: 1,
                    estado: 1,
                    sala: "$funciones.sala",
                    "funciones.fecha_hora_inicio": 1,
                    "funciones.fecha_hora_fin": 1
                }
            }
        ]).toArray();

        this.conexion.close();

        return res;
    }

}