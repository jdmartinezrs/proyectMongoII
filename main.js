import { ObjectId } from "mongodb";
import { Pelicula } from "./js/modules/pelicula.js";
import { Asiento } from "./js/modules/asiento.js";
import { Cliente } from "./js/modules/cliente.js";

// ! MOVIES CASES


// let objp = new Pelicula() //todo: uncomment this before running each movies call

//! 1.1 Obtener informacion de todas la películas

// const status = "En cartelera"; 
// const moviesAndFunctions = await objp.getAllMoviesAndFunctionsInfo(status);
// console.table(moviesAndFunctions);
 

// ! 1.2 Obtener informacion de una película en especifico



// const titulo = "El Gran Escape"; // O cualquier otro título de 
// const specificMovie = await objp. getAnEspecificMovieInfo(titulo);
// console.table(specificMovie);



// ! SEATS CASES

// ! 2.2 Checks seat availability for a specific screening.

//let obj = new Asiento() //todo: uncomment this before running each movies call
/** 
const asientoInstance = new Asiento();
const idFuncion = "64a7e409f7a42a24c8d7e826"; // todo: Replace with your actual id_funcion value
asientoInstance.getAllSeatsByFunction(idFuncion).then(seats => {
    console.log("Available seats:", seats);
}).catch(err => {
    console.error("Error:", err);
});
*/


// ! 3.1 Reserve Seats: Allow the selection and reservation of seats for a specific screening.
/** 
const asientoInstance = new Asiento();
const seatId = "64a7e409f7a42a24c8d7e82b"; //  todo: Replace with your actual seat id
const functionId = "64a7e409f7a42a24c8d7e828"; //todo: Replace with your actual function id

asientoInstance.setAReservetoASeatForAFunction(seatId, functionId).then(result => {
    console.log(result.message);
}).catch(err => {
    console.error("Error:", err);
});
*/


// ! Retrieves  reserved seat and its specific function, including the room and time. 
/** 
const asientoInstance = new Asiento();
const seatId = "64a7e409f7a42a24c8d7e82b"; // todo: Replace with "seat_id" 

asientoInstance.getAllTSeatsReservedByFunction(seatId).then(result => {
    if (result.success) {
        console.log("Seat details:", result.data);
    } else {
        console.log(result.message);
    }
}).catch(err => {
    console.error("Error:", err);
});
*/


/** 
// !3.2 Cancel Seat Reservations: Allow the cancellation of a seat reservation already made.
const asientoInstance = new Asiento();
const seatId = "64a7e409f7a42a24c8d7e879"; //  todo: insert the SeatId to cancel a reserv

asientoInstance.setACancelationtoAReservedSeat(seatId).then(result => {
    console.log(result.message);
}).catch(err => {
    console.error("Error:", err);
});
*/




// let obj = new Cliente()
//cliente
//console.log(await obj.getAllClient)

//! CUSTOMER CASES



/**
console.log( await obj.createClientAndUser({ _id: new ObjectId(),nombre:"dvd",apellido:"Rojas",nick:"macone",email:"azrohhh103@example.com","telefono":"3001235678",tipo_de_cliente:"Regular",descuento:0,codigo_tarjeta:"",fecha_expedicion: null,estado: "", cedula: 1099999999, rol: "usuarioEstandar"}))
 */





// ! Get info of a User
const cliente = new Cliente();

const userId = "66a966ce18a924c1093f439f";
const userInfo = await cliente.getUserInfo(userId);
console.log(userInfo);



// ! Get User by rol

//  console.log(await obj.getUserByRoles())


