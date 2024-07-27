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
    //ejercicio 1

    async getAllEvents(){
        let res = await this.collection.aggregate([
            {
                $project: { genero: 1}
            }
        ]).toArray();
        await this.conexion.close();
        return res;
    }
}