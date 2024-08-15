const Pelicula = require('./server/movies');
const Cliente = require('./server/clientRoles');
const Asiento = require('./server/seats')
const { ObjectId } = require("mongodb");



const clienteInstance = Cliente.getInstance();

    clienteInstance.createClientAndUser({
        _id: new ObjectId(),
        nombre: "lilkev",
        apellido: "galvinis",
        nick: "kevscript",
        email: "campuslands@example.com",
        telefono: "1010101010",
        tipo_de_cliente: "",
        descuento: 0,
        codigo_tarjeta: "",
        fecha_expedicion: null,
        estado: "",
        cedula: 10987564879,
        rol: "Administrador"
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
