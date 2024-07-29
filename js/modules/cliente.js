import { ObjectId } from "mongodb";
import { connect } from "../../helpers/connect.js";
import { log } from "console";



export class cliente extends connect{
 

    async createClientAndUser(client) {
      let {nombre,apellido,nick:apodo,email,telefono,tipo_de_cliente,descuento,codigo_tarjeta,fecha_expedicion,estado,codigo}=client;
      await this.connectOpen();
      const collection = this.db.collection('cliente');
      const condicion = await collection.find({
        $or:[
            {nick: apodo},
            {cedula:codigo},
            {email: correo}
        ]
     }).toArray();
     if(condicion.length) return {mensaje: "El usuario ya existe", data: condicion}
     const res = await collection.insertOne({

        nombre,
        apellido,
        nick: apodo,
        email,
        telefono,
        tipo_de_cliente,
        descuento,
        codigo_tarjeta,
        fecha_expedicion,
        estado,
        codigo
     });

     const usuario = await this.db.command({



     })

      
    }


    
}