const Connect = require("../helpers/connect")

module.exports= class Asiento extends Connect {
    static instance;
    collection
    constructor() {
        super();
        this.collection = this.db.collection('asiento');
        Asiento.instance = this;
        return this;
    }
    /**
        * 2.2 Checks seat availability for a specific screening.
        * @param {ObjectId} id_funcion - The ObjectId of the function to check.
        * @returns {Array} - List of available seats.
        */
    async getAllSeatsByFunction(id_funcion) {
        let res;
        try {
            await this.conexion.connect();
            res = await this.collection.aggregate([
                {
                    $match: {
                        id_funcion: new ObjectId(id_funcion),
                        estado: "Por Asignar"
                    }
                },
                { $project: { _id: 0, fila: 1, codigo: 1, estado: 1, id_funcion: 1 } }
            ]).toArray();
        } catch (err) {
            console.error("Error al obtener los asientos:", err);
        } finally {
            await this.conexion.close();
        }
        return res;
    }
}