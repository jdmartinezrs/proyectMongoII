const Pelicula = require('./server/movies');
const Cliente = require('./server/clientRoles');
const Asiento = require('./server/seats')
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

