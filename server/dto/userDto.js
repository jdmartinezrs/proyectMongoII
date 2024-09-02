class UserDTO {
    templateNotUsers(){
        return{
            status: 404,
            message: "There are no registered users",
            data: []
        }
    }
templateListUsers(arg){
    return{
        status: 200,

    }
}
}

module.exports = UserDTO;


