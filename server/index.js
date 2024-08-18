const Pelicula = require('./movies');
const Cliente = require('./clientRoles');
const Asiento = require('./seats')
const { ObjectId } = require("mongodb");

const asientoInstance = new Asiento();
const seatId = "64a7e409f7a42a24c8d7e879";

asientoInstance.setACancelationtoAReservedSeat(seatId)
    .then(result => {
        console.log(result.message);
    })
    .catch(err => {
        console.error("Error:", err);
    });

