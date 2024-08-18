const express = require ('express');
const path = require('path');
const app = express();
//TO ACSSES IN STATIC FOLDERS
app.use(express.json());//La idea es que todas las APIS RECIBAN JSON 


app.use('/css', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'css')));
app.use('/js', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'js')));
app.use('/storage', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'storage')));


app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, process.env.EXPRESS_STATIC, 'views/index.html'))
})
app.get("/usuario",(req, res)=>{
    res.sendFile(path.join(__dirname, process.env.EXPRESS_STATIC, 'views/users.html'))
})

// app.post("/user",(req,res)=>{
//     res.status(201).json({message: "Datos Recibidos", data:req.body});
// })
// app.delete('/user/:bboy',(req, res)=>{
//     res.status(201).json({message: 'Datos Recibidos', data: req.params});
// })

// app.put("/user/:id", (req,res)=>{
//     res.status(201).json({message: 'Datos Recibidos', data: req.query, databody: req.body, dataparams: req.params })
// })


// MORE APIS

//insertar información
app.post("/",(req, res)=>{

})

app.use((req,res)=>{
    res.status(404).json({messager: "you are not authorized"})
})
let config = {
    port: process.env.EXPRESS_PORT,
    host: process.env.EXPRESS_HOST
}


app.listen(config, ()=>{
    console.log("http://localhost:3000");
});






































// const express = require("express");
// const path = require('path');
// const app = express();
// const router = require("./server/router");


// app.use(express.json());

// router.use()

// app.use('/ws', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'ws.js')));
// app.use('/css', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'css')));
// app.use('/js', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'js')));
// app.use('/storage', express.static(path.join(__dirname, process.env.EXPRESS_STATIC, 'storage')));

// app.use((req, res, next) => {
//     req.__dirname = __dirname;
//     next();
// }, router);

// app.use((req, res) => {
//     res.status(404).json({ message: "You don't have authorization" })
// })
// let config = {
//     host: process.env.EXPRESS_HOST,
//     port: process.env.EXPRESS_PORT
// };

// app.listen(config, () => {
//     console.log(`Server running on http://${config.host}:${config.port}`)

// });

