const {body, query }= require("express-validator")

exports.userValidationEmpty = () => {

return[
body().custom((value,{req})=>{
    if(Object.keys(req.body).length>0){
        throw new Error('No nvie nada en la url')
    }
    return true;
}),
query().custom((value,{req})=>{
    if(Object.keys(req.query).length>0){
        throw new Error('No envie nada en la url');
    }
    return true;
})

];


};