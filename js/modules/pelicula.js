import { connect } from "../../helpers/connect.js";

/*Ejemplo*/

export class pelicula extends connect{
    static instance;
    collection
    constructor() {
        super();
        this.collection = this.db.collection('pelicula');
        pelicula.instance = this;
        return this;
    }
    



    async getAllMoviesAndFunctionsInfo(){
        let res = await this.collection.aggregate([
            {
                $match: { estado: "En cartelera" }
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
                    estado:1,
                    "sala":"$funciones.sala",
                    "funciones.fecha_hora_inicio": 1,
                    "funciones.fecha_hora_fin": 1,
                   
                }
            }
        ]).toArray();
        
        // await
        this.conexion.close();
        return res;
    }



    

    async getAnEspecificMovieInfo(){
        let res = await this.collection.aggregate([
            {
                $match: { titulo: 'El Gran Escape'}
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
                    estado:1,
                    "sala":"$funciones.sala",
                    "funciones.fecha_hora_inicio": 1,
                    "funciones.fecha_hora_fin": 1,
                   
                }
            }
        ]).toArray();
        
        // await
        this.conexion.close();
        return res;
    }
}