//import bcrypt
const bcrypt = require('bcryptjs');

//import user model
const UserModel = require('../models/user.model');
//import generate token
const { generateToken } = require('../utils/jwt');

//login route
exports.login = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await UserModel.findByEmail(email); //find user by email
        //if user not found
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        //compare password
        const isValid = await bcrypt.compare(password,user.password);
        //if password is not valid
        if(!isValid){
            return res.status(401).json({message: 'Invalid password'});
        }
        //generate token
        const token = generateToken({id: user.id, email:user.email});
        //return token
        return res.json({token});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: 'Login Error', error:error.message});
    }
}