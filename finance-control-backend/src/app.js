// importing core modules
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // load enviroment variables from .env files


// initialize express app
const app = express();

// middleware
app.use(express.json());
app.use(cors()); // allows fronteend to communicate with backend

//temporary routes for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Importing routes
const pingRoutes = require('./routes/ping.routes');
// Using routes
app.use('/ping', pingRoutes);
// Default route for the API root
app.get('/', (req, res) => {
    res.send('Finance Control Backend is running!');
  });

const PORT = process.env.PORT || 5000;


// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });