// array para simular um bd de usuários
let users = [];

//get all users
function getAllUsers(req,res){
    res.status(200).json(users);
}

// function createUser(req,res){
//     const {name,email,password} = req.body;

//     //create a new user
//     const newUser = {
//         id: users.length + 1,
//         name,
//         email,
//         password
//     }
//     users.push(newUser);
//     res.status(201).json(newUser);

// }


// Exporta as funções para serem usadas nas rotas
module.exports = {
    getAllUsers,
    // createUser,
  };