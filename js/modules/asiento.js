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
  
//para Verificar Disponibilidad de Asientos:** Permitir la consulta de la disponibilidad de asientos en una sala para una proyección específica.
    async getAllTSeatsByFunction() {//muestra tods lo asientos por id
      let res;
      try {
        // Abre la conexión a la base de datos si no está abierta
        await this.conexion.connect();
        
        res = await this.collection.aggregate([
          { $match: { id_funcion: new ObjectId("64a7e409f7a42a24c8d7e825"),
            estado:"Por Asignar"
           } }, // Filtra por id_funcion
          { $project: { _id: 0, fila: 1, codigo: 1, estado: 1, id_funcion: 1 } } // Proyección de campos
        ]).toArray(); // Convierte el cursor en un array
    
      } catch (err) {
        console.error("Error al obtener los asientos:", err);
      } finally {
        // Cierra la conexión
        await this.conexion.close();
      }   
      return res;
    }



    async updateTheStatusOfASeat(){
        let res = await this.collection.updateOne(
            { _id: new ObjectId("64a7e409f7a42a24c8d7e82b") },//
            { 
              $set: { 
                estado: "Reservado",
                id_funcion: new ObjectId("64a7e409f7a42a24c8d7e828") // añadir una funcion a un asiento en especifico
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

  
    
//permite ver la sala y hora en donde fue reservado

    async getAllTSeatsByFunction() {//muestra tods lo asientos por id
      let res;
      try {
        // Abre la conexión a la base de datos si no está abierta
        await this.conexion.connect();
        
        res = await this.collection.aggregate([
          // Unir la colección de asientos con la colección de funciones
          {
            $lookup: {
              from: 'funcion', // Nombre de la colección de funciones
              localField: 'id_funcion', // Campo en la colección de asientos
              foreignField: '_id', // Campo en la colección de funciones
              as: 'funcion' // Alias para el resultado de la unión
            }
          },
          {
            $unwind: '$funcion' // Desenrollar el array de funciones para obtener documentos individuales
          },
          {
            $match: {
              _id: new ObjectId("64a7e409f7a42a24c8d7e82b") 
            }
          },
          {
            $project: {
              _id: 0, // Excluir el campo _id
              fecha_hora_inicio: '$funcion.fecha_hora_inicio', // Incluir la fecha y hora de inicio
              fecha_hora_fin: '$funcion.fecha_hora_fin',
               // Incluir la fecha y hora de fin
               "funcion.sala":1
            }
          }
        ]).toArray();
    
      } catch (err) {
        console.error("Error al obtener los asientos:", err);
      } finally {
        // Cierra la conexión
        await this.conexion.close();
      }   
      return res;
    }

   



}