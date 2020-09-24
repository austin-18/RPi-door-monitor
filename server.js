
const dotenv = require('dotenv');
const colors = require('colors'); // colors library to color text in to console (this is optional)

const path = require('path');
// importing connectDB method from db.js to connect to MongoDB
const connectDB = require('./config/db');

const { logDoorOpen } = require('../controllers/door'); 

// const serveStatic = require('serveStatic')

// Load env variables
dotenv.config({ path: './config/config.env'});

// connectDB() method must be somewhere under the line that loading the environment variables config file (lines above)
connectDB();

// Set up GPIO data here:

// while(1) { monitor GPIO pin for change => call logDoorOpen to create new datapoint on server }
