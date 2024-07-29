
import { pelicula } from "./js/modules/pelicula.js";
import { asiento } from "./js/modules/asiento.js";


//caso de uso 1

// let obj = new pelicula() 

//Obtener informacion de todas la películas

// console.table(await obj.getAllMoviesAndFunctionsInfo())

//Obtener informacion de una película en especifico

// console.table(await obj.getAnEspecificMovieInfo())

let obj = new asiento() 

//console.log(await obj.updateTheStatusOfASeat())

//ver todas lo asientos por funcion
// console.log(await obj1.getAllTSeatsByFunction())


//cliente
//console.log(await obj.getAllClient)

console.log(await obj.getAllTSeatsByFunction())