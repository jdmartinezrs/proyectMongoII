const express = require ('express')
const router = express.Router();
const path = require('path');
const {getUserInfo} = require("./controllers/userController");
const {userValidationEmpty}= require('./validator/userValidator')//añadir dato en el const

router.get("/users", (req, res)=>{
    res.sendFile(path.join(req.__dirname, process.env.EXPRESS_STATIC, 'views/user.html'))//si se crea o no el index 
})
//router.get('/users/v1',userValidationAll(), creatingUsers);// estar pendiente de userValidationRules
router.get('/users/v1', userValidationEmpty(),getUserInfo);


router.get('/',(req,res)=>{
    res.sendFile('slamalenko')
})


module.exports= router;