//importing jwt
const jwt = require('jsonwebtoken');

//secret key
if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in environment variables");
  }
const SECRET_KEY = process.env.SECRET_KEY;

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
