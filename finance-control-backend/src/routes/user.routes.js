const express = require('express');
const router = express.Router();

//importing controller
const {
    getAllUsers,
    createUser,
} = require('../controllers/user.controller');

//defining routes
router.get('/users', getAllUsers); //GET all users
//router.post('/users', createUser); //POST a NEW user


module.exports = router;
