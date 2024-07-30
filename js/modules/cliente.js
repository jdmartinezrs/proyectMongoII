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
      // Open database connection
     
      const collection = this.db.collection('cliente');
      
      // Check if a user with the same nickname, email, or cedula already exists
      const condicion = await collection.find({
        $or: [
          { nick: apodo },
          { cedula: cedula },
          { email: email }
        ]
      }).toArray();
      
      // If a user exists, return a message with the existing user data
      if (condicion.length) {
        return { mensaje: "El usuario ya existe", data: condicion };
      }

      // Insert the new client into the 'cliente' collection
      const res = await collection.insertOne({
       _id: new ObjectId(), nombre, apellido, nick: apodo, email, telefono,
        tipo_de_cliente, descuento, codigo_tarjeta,
        fecha_expedicion, estado, cedula, rol
      });

      // Uncomment this section if you want to create a user in MongoDB
      /*
      const usuario = await this.db.command({
        createUser: apodo,
        pwd: `${cedula}`, // Use 'cedula' as the password
        roles: [{ role: rol, db: process.env.MONGO_DB }]
      });
      */

      // Return success message
      return {
        success: res.acknowledged,
        mensaje: "Cliente creado con éxito" // Adjusted message since user creation is commented out
      };
    } catch (error) {
      console.error("Error creating client and user:", error);
      return { mensaje: "Error al crear el cliente", error };
    }
  }
}

// export class Cliente extends connect {

//   /**
//    * Creates a new client and user in the database.
//    * @param {Object} client - The client information to be created.
//    * @returns {Object} - Status message and data if applicable.
//    */
//   async createClientAndUser(client) {
//       let { nombre, apellido, nick: apodo, email, telefono, tipo_de_cliente, descuento, codigo_tarjeta, fecha_expedicion, estado, cedula, rol } = client;

//       // Open database connection
//       await this.connectOpen();
//       const collection = this.db.collection('cliente');
      
//       // Check if a user with the same nickname, email, or cedula already exists
//       const condicion = await collection.find({
//           $or: [
//               { nick: apodo },
//               { cedula: cedula },
//               { email: email }
//           ]
//       }).toArray();
      
//       // If a user exists, return a message with the existing user data
//       if (condicion.length) return { mensaje: "El usuario ya existe", data: condicion };

//       // Insert the new client into the 'cliente' collection
//       const res = await collection.insertOne({
//           nombre,
//           apellido,
//           nick: apodo,
//           email,
//           telefono,
//           tipo_de_cliente,
//           descuento,
//           codigo_tarjeta,
//           fecha_expedicion,
//           estado,
//           cedula, // Ensure 'cedula' is included
//           rol
//       });

// /** 
//       // Create a new user in MongoDB with the provided role
//       const usuario = await this.db.command({
//           createUser: apodo,
//           pwd: `${cedula}`, // Use 'cedula' as the password
//           roles: [
//               { role: rol, db: process.env.MONGO_DB }
//           ]
//       });

//       // Return success message
//       return {
//           success: res.acknowledged && usuario.ok,
//           mensaje: "Cliente y usuario creados con éxito"
//       };
//   }

// */

// }
// }


































/*
export class Cliente extends connect{
 

    async createClientAndUser(client) {
      let {nombre,apellido,nick:apodo,email,telefono,tipo_de_cliente,descuento,codigo_tarjeta,fecha_expedicion,estado,codigo,rol}=client;
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
        codigo,
        rol
     });

     const usuario = await this.db.command({
      createUser: apodo,
      pwd:`${codigo}`,
      roles:[
        {role: rol, db: process.env.MONGO_DB}
      ]



     });

      
    }


    
}
    */