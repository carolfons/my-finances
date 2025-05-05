const {verifyToken} = require('../utils/jwt');//import verify token function from jwt.js

//middleware to protect private routes
function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    //if no authorization header
    if(!authHeader){
        return res.status(401).json({message: 'No token provided'});
    }
    //if authorization header is present
    const token = authHeader.split(' ')[1];
    
    try{
        const decoded = verifyToken(token);
        //store data from authenticated user in req.user
        req.user = decoded;
        next();
    }catch(error){
        return res.status(401).json({message: 'Invalid token'});
    }
}

module.exports = authMiddleware;