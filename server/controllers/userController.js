const {validationResult} = require ('express-validator');
const UserDTO = require('../dto/userDto')
const Cliente = require('../model/clientModel')

const showAllUsers = async (req,res)=> {
const errors = validationResult(req);
if(!errors.esEmpty())return res.status(400).json({errors: errors.array()});
const userDto = new UserDTO();
const obj = new Cliente()
let rest = await obj.getUserInfo();
if(res.length) UserDTO.templateListUsers(res);
if(!res.length) UserDTO.templateNotUsers(res);

// res.status(201).json({logica: /*await*/ obj. getUserInfo()});//methodos de la clase 
};

module.exports = {showAllUsers};

