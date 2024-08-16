const Connect = require("../helpers/connect");
const {ObjectId} = require ('mongodb');

module.exports = class Asiento extends Connect {
    static instance;

    // Constructor
    constructor() {
        super();
        this.collection = this.db.collection('asiento');
    }

    // Singleton instance getter
    static async getInstance() {
        if (!Asiento.instance) {
            Asiento.instance = new Asiento(); // Should be Asiento, not Pelicula
            await Asiento.instance.initialize();
        }
        return Asiento.instance;
    }

    /**
     * 2.2 Checks seat availability for a specific screening.
     * @param {ObjectId} id_funcion - The ObjectId of the function to check.
     * @returns {Array} - List of available seats.
     */
    async getAllSeatsByFunction(id_funcion) {
        try {
            await this.conexion.connect();
            const seats = await this.collection.aggregate([
                {
                    $match: {
                        id_funcion: new ObjectId(id_funcion),
                        estado: "Por Asignar"
                    }
                },
                { 
                    $project: { 
                        _id: 0, 
                        fila: 1, 
                        codigo: 1, 
                        estado: 1, 
                        id_funcion: 1 
                    } 
                }
            ]).toArray();
            return seats;
        } catch (err) {
            console.error("Error al obtener los asientos:", err);
            throw err;
        }
    }
    async setAReservetoASeatForAFunction(seatId, functionId) {
        let res;
        try {
            await this.conexion.connect();
            res = await this.collection.updateOne(
                { _id: new ObjectId(seatId) },
                {
                    $set: {
                        estado: "Reservado",
                        id_funcion: new ObjectId(functionId)
                    }
                }
            );
        } catch (err) {
            console.error("Error al actualizar el asiento:", err);
            return {
                success: false,
                message: "Error al actualizar el asiento"
            };
        } finally {
            await this.conexion.close();
        }

        return {
            success: res.acknowledged,
            message: "Asiento actualizado con éxito"
        };
    }
    static closeConnection() {
        if (Asiento.instance) {
            Asiento.instance.close();
            Asiento.instance = undefined;
            console.log("Conexión a MongoDB cerrada");
        }
    }

    async getAllTSeatsReservedByFunction(seatId) {
        let res;
        try {
            await this.conexion.connect();

            const seat = await this.collection.findOne({ _id: new ObjectId(seatId) });

            if (seat && seat.estado !== 'Reservado') {
                return {
                    success: false,
                    message: 'The seat is not reserved.'
                };
            }

            res = await this.collection.aggregate([
                {
                    $lookup: {
                        from: 'funcion',
                        localField: 'id_funcion',
                        foreignField: '_id',
                        as: 'funcion'
                    }
                },
                {
                    $unwind: '$funcion'
                },
                {
                    $match: {
                        _id: new ObjectId(seatId)
                    }
                },
                {
                    $project: {
                        _id: 0,
                        fecha_hora_inicio: '$funcion.fecha_hora_inicio',
                        fecha_hora_fin: '$funcion.fecha_hora_fin',
                        sala: '$funcion.sala',
                        estado: 1
                    }
                }
            ]).toArray();

        } catch (err) {
            console.error("Error al obtener los asientos:", err);
            return {
                success: false,
                message: "Error al obtener los asientos"
            };
        } finally {
            await this.conexion.close();
        }

        return {
            success: true,
            data: res
        };
    }
    async setACancelationtoAReservedSeat(seatId) {
        let res;
        try {
            await this.conexion.connect();

            const seat = await this.collection.findOne({ _id: new ObjectId(seatId) });

            if (!seat) {
                return {
                    success: false,
                    message: "Seat not found."
                };
            }

            if (seat.estado !== "Reservado") {
                return {
                    success: false,
                    message: "The seat is not reserved and cannot be canceled."
                };
            }

            res = await this.collection.updateOne(
                { _id: new ObjectId(seatId) },
                {
                    $set: {
                        estado: "Por Asignar"
                    }
                }
            );
        } catch (err) {
            console.error("Error al actualizar el asiento:", err);
            return {
                success: false,
                message: "Error al actualizar el asiento"
            };
        } finally {
            await this.conexion.close();
        }

        return {
            success: res.acknowledged,
            message: "Reservation cancelled successfully"
        };
    }
};
