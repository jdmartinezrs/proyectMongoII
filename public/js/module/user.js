export const ObtenerListaUsuarios = async()=>{
    let peticion = await fetch("/users/v1");
let res = await peticion.json();
return res;
}

const ws = new Worker("./ws.js");

ws.postMessage({nombre:"david"});
