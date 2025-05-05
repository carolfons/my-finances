//import express
const express = require('express');
//import router
const router = express.Router();
//import auth controller
const authController = require('../controllers/auth.controller');


//login route
router.post('/login', authController.login);
module.exports = router;