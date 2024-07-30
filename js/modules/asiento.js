import { ObjectId } from "mongodb";
import { connect } from "../../helpers/connect.js";
import { log } from "console";
ObjectId


/**
 * * this is my Asiento class
 * @class
 */
export class Asiento extends connect{
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
          { $match: { 
              id_funcion: new ObjectId(id_funcion), // Insert the "id_funcion" you want to see its available seats.
              estado: "Por Asignar" // Matches seats with "Por Asignar" status, indicating availability.
          } }, 
          { $project: { _id: 0, fila: 1, codigo: 1, estado: 1, id_funcion: 1 } } 
      ]).toArray(); 
  } catch (err) {
      console.error("Error al obtener los asientos:", err); // Logs any errors encountered.
  } finally {
      await this.conexion.close(); // Ensures the database connection is closed after the operation.
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
              { _id: new ObjectId(seatId) }, // id del asiento
              { 
                  $set: { 
                      estado: "Reservado",
                      id_funcion: new ObjectId(functionId) // Añadir una función a un asiento específico
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
          message: "Asiento actualizado con éxito" // ! if seat status is updated itis going to return this message
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
        // Open the database connection if not already open
        await this.conexion.connect();

        // Check the seat status
        const seat = await this.collection.findOne({ _id: new ObjectId(seatId) });
        
        if (seat && seat.estado !== 'Reservado') {
            return {
                success: false,
                message: 'The seat is not reserved.' // ! if the seat is Not Reserved it is going to return this message
            };
        }

        // If the seat is reserved, get function details
        res = await this.collection.aggregate([
            {
                $lookup: {
                    from: 'funcion', // Name of the functions collection
                    localField: 'id_funcion', // Field in the seats collection
                    foreignField: '_id', // Field in the functions collection
                    as: 'funcion' // Alias for the join result
                }
            },
            {
                $unwind: '$funcion' // Unwind the functions array to get individual documents
            },
            {
                $match: {
                    _id: new ObjectId(seatId) // Filter by seatId
                }
            },
            {
                $project: {
                    _id: 0, // Exclude the _id field
                    fecha_hora_inicio: '$funcion.fecha_hora_inicio', // Include function start time
                    fecha_hora_fin: '$funcion.fecha_hora_fin', // Include function end time
                    sala: '$funcion.sala' // Include the room information
                }
            }
        ]).toArray();

    } catch (err) {
        console.error("Error al obtener los asientos:", err); // Log any errors encountered
        return {
            success: false,
            message: "Error al obtener los asientos"
        };
    } finally {
        // Close the database connection
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
        
        // Check the current status of the seat
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

        // Proceed with cancellation
        res = await this.collection.updateOne(
            { _id: new ObjectId(seatId) }, // id del asiento
            { 
                $set: { 
                    estado: "Por Asignar" // Update status to "Por Asignar"
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
        message: "Reservation cancelled successfully" // Message after successful cancellation
    };
}


}

