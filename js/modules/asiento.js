import { ObjectId } from "mongodb";
import { connect } from "../../helpers/connect.js";
import { log } from "console";
ObjectId


/**
 * * this is my Asiento class
 * @class
 * Represents the Asiento class, which manages seat operations in the database.
 */
export class Asiento extends connect {
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



    /**
     * 3.1 Reserve Seats: Allow the selection and reservation of seats for a specific screening.
     * @param {ObjectId} seatId - The ObjectId of the seat to update.
     * @param {ObjectId} functionId - The ObjectId of the function to assign to the seat.
     * @returns {Object} - Status of the update operation.
     */
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


    /**
      * Retrieves all seats for a specific function, including the room and time, 
      * if the seat is "Reservado".
      * @param {ObjectId} seatId - The ObjectId of the seat to check.
      * @returns {Object} - Details of the seat or a message if not reserved.
      */
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


    /**
      *3.2 Cancels a reservation for a specific seat if it is reserved.
      * @param {ObjectId} seatId - The ObjectId of the seat to cancel the reservation.
      * @returns {Object} - Status of the update operation.
      */
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


}
