// Importing required modules
const express = require('express');
const router = express.Router();

// Importing controller
const { ping } = require('../controllers/ping.controller');


// Defining the /ping route
router.get('/', ping);

// Exporting the router
module.exports = router;