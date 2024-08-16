
const Connect= require("../helpers/connect"); // Asegúrate de que esta ruta sea correcta

module.exports = class Pelicula extends Connect {
    static instance;

    constructor() {
        super();
        this.collection = this.db.collection('pelicula');
    }

    static async getInstance() {
        if (!Pelicula.instance) {
            Pelicula.instance = new Pelicula();
            await Pelicula.instance.initialize();
        }
        return Pelicula.instance;
    }

    async getAllMoviesAndFunctionsInfo(status) {
        try {
            const result = await this.collection.aggregate([
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

            return result;
        } catch (err) {
            console.error('Error retrieving movies and functions:', err);
            throw err;
        }
    }

    async initialize() {
        // Aquí podrías poner cualquier lógica de inicialización necesaria
    }

    destructor() {
        Pelicula.instance = undefined;
    }
    
    getAnEspecificMovieInfo(nombre) {
        return this.collection.aggregate([
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
        ]).toArray()
        .then(res => {
           
            return res;
        })
        .catch(err => {
            console.error('Error retrieving specific movie info:', err);
            throw err;
        });
    }

    initialize() {
     
    }
    
    static closeConnection() {
        if (Pelicula.instance) {
            Pelicula.instance.close();
        }
    }
}

