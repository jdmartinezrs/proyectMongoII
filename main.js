
import { pelicula } from "./js/modules/pelicula.js";

// connect

// async function main() {
//     try {
        
//         const dbConnect = new connect();
        
//         await dbConnect.testConnection();
        

//     } catch (error) {
//         console.error("Error durante la prueba de conexión:", error);
//     }
// }

// main();

let obj = new pelicula() 

// console.table(await obj.getAllMoviesAndFunctionsInfo())

console.table(await obj.getAnEspecificMovieInfo())