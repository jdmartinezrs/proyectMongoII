const { ObjectId } = require("mongodb");
const Connect = require("../../helpers/connect");

module.exports = class Cliente extends Connect {
    static instance;

    // Constructor
    constructor() {
        super();
        this.collection = this.db.collection('cliente');
    }

    // Método estático para obtener la instancia de Cliente
    static getInstance() {
        if (!Cliente.instance) {
            Cliente.instance = new Cliente();
            // Aquí podrías realizar cualquier inicialización necesaria
        }
        return Cliente.instance;
    }

    createClientAndUser(client) {
        const {
            nombre, apellido, nick: apodo, email, telefono,
            tipo_de_cliente, descuento, codigo_tarjeta,
            fecha_expedicion, estado, cedula, rol
        } = client;

        return this.collection.find({
            $or: [
                { nick: apodo },
                { cedula: cedula },
                { email: email }
            ]
        }).toArray()
        .then(condicion => {
            if (condicion.length) {
                return { mensaje: "El usuario ya existe", data: condicion };
            }
            return this.collection.insertOne({
                _id: new ObjectId(), nombre, apellido, nick: apodo, email, telefono,
                tipo_de_cliente, descuento, codigo_tarjeta,
                fecha_expedicion, estado, cedula, rol
            });
        })
        .then(res => {
            return this.db.command({
                createUser: apodo,
                pwd: `${cedula}`,
                roles: [{ role: rol, db: process.env.MONGO_DB }]
            })
            .then(usuario => {
                return {
                    success: res.acknowledged,
                    mensaje: "USER creado con éxito"
                };
            });
        })
        .catch(error => {
            console.error("Error creating client and user:", error);
            return { mensaje: "Error al crear el user", error };
        });
    }
    getUserInfo(userId) {
        const collection = this.db.collection('cliente');
        return collection.aggregate([
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
    }
    getUserByRoles(rol) {
        const collection = this.db.collection('cliente');
        return collection.aggregate([
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
    }
};

  
  