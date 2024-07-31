import { ObjectId } from "mongodb";
import { connect } from "../../helpers/connect.js";
import { log } from "console";



export class Cliente extends connect {

  /**
   * Creates a new client and user in the database.
   * @param {Object} client - The client information to be created.
   * @returns {Object} - Status message and data if applicable.
   */

  async createClientAndUser(client) {
    let {
      nombre, apellido, nick: apodo, email, telefono,
      tipo_de_cliente, descuento, codigo_tarjeta,
      fecha_expedicion, estado, cedula, rol
    } = client;

    try {


      const collection = this.db.collection('cliente');


      const condicion = await collection.find({
        $or: [
          { nick: apodo },
          { cedula: cedula },
          { email: email }
        ]
      }).toArray();


      if (condicion.length) {
        return { mensaje: "El usuario ya existe", data: condicion };
      }


      const res = await collection.insertOne({
        _id: new ObjectId(), nombre, apellido, nick: apodo, email, telefono,
        tipo_de_cliente, descuento, codigo_tarjeta,
        fecha_expedicion, estado, cedula, rol
      });



      const usuario = await this.db.command({
        createUser: apodo,
        pwd: `${cedula}`,
        roles: [{ role: rol, db: process.env.MONGO_DB }]
      });



      return {
        success: res.acknowledged,
        mensaje: "USER creado con éxito"
      };
    } catch (error) {
      console.error("Error creating client and user:", error);
      return { mensaje: "Error al crear el user", error };
    }
  }



  async getUserInfo(userId) {
    const collection = this.db.collection('cliente');
    let res = await collection.aggregate([
      {
        $match: {
          _id: new ObjectId(userId)
        }
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          apellido: 1,
          nick: 1,
          email: 1,
          telefono: 1,
          tipo_de_cliente: 1,
          descuento: 1,
          codigo_tarjeta: 1,
          fecha_expedicion: 1,
          estado: 1,
          cedula: 1,
          rol: 1
        }
      }
    ]).toArray();
    return res;

  }

  async getUserByRoles(rol) {
    const collection = this.db.collection('cliente');
    let res = await collection.aggregate([
      {
        $match: {
          rol: rol
        }
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          apellido: 1,
          nick: 1,
          email: 1,
          telefono: 1,
          tipo_de_cliente: 1,
          descuento: 1,
          codigo_tarjeta: 1,
          fecha_expedicion: 1,
          estado: 1,
          cedula: 1,
          rol: 1
        }
      }
    ]).toArray();
    return res;
  }

}






























