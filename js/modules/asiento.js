import { ObjectId } from "mongodb";
import { connect } from "../../helpers/connect.js";
import { log } from "console";
ObjectId

/*Ejemplo*/

export class asiento extends connect{
    static instance;
    collection
    constructor() {
        super();
        this.collection = this.db.collection('asiento');
        asiento.instance = this;
        return this;
    }
    //ejercicio 1

    async updateTheStatusOfASeat(){
        let res = await this.collection.updateOne(
            { _id: new ObjectId("64a7e409f7a42a24c8d7e82b") },
            { 
              $set: { 
                estado: "Asignado",
                id_funcion: new ObjectId("64a7e409f7a42a24c8d7e828") // Reemplaza con el nuevo ObjectId
              }
            }
          );
        
        // await
        // this.conexion.close();
        return {
            success: res.acknowledged,
            message: "Asiento actualizado con éxito"
        };
    }

}