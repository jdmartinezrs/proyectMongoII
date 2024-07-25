db.createRole({
    role: "Administrador",
    privileges: [
        {
            resource: { db: "cineCampus", collection: "asiento" },
            actions: ["find", "insert", "remove"]
        },
        {
            resource: { db: "cineCampus", collection: "boleta" },
            actions: ["find", "insert", "remove"]
        },
        {
            resource: { db: "cineCampus", collection: "cliente" },
            actions: ["find", "insert", "remove"]
        },
        {
            resource: { db: "cineCampus", collection: "funcion" },
            actions: ["find", "insert", "remove"]
        },
        {
            resource: { db: "cineCampus", collection: "pelicula" },
            actions: ["find", "insert", "remove"]
        }
    ],
    roles: []
})


db.createRole({
    role: "usuarioEstandar",
    privileges: [
        {
            resource: { db: "cineCampus", collection: "asiento" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "boleta" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "cliente" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "funcion" },
            actions: ["find"]
        },
        {
            resource: { db: "cineCampus", collection: "pelicula" },
            actions: ["find"]
        }
    ],
    roles: []
})


/**
 *  Puede comprar boletos en línea con descuentos aplicables para titulares de tarjetas VIP
 */

db.createRole({
    role: "usuarioVIP",
    privileges: [
        {
            resource: { db: "cineCampus", collection: "asiento" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "boleta" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "cliente" },
            actions: ["find", "insert", "remove","update"]
        },
        {
            resource: { db: "cineCampus", collection: "funcion" },
            actions: ["find"]
        },
        {
            resource: { db: "cineCampus", collection: "pelicula" },
            actions: ["find"]
        }
    ],
    roles: []
})
