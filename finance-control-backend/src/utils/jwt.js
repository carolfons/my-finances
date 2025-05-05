//importing jwt
const jwt = require('jsonwebtoken');

//secret key
const SECRET_KEY = process.env.SECRET_KEY|| "my-secret-key";

module.exports = {
    //generate token
    generateToken(payload){
        return jwt.sign(payload,SECRET_KEY,{expiresIn: '7d'});
    },

    //verify token
    verifyToken(token){
        return jwt.verify(token,SECRET_KEY);
    }

}
