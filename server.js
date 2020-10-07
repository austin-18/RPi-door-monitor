
const dotenv = require('dotenv');
const colors = require('colors'); // colors library to color text in to console (this is optional)

const path = require('path');
// importing connectDB method from db.js to connect to MongoDB
const connectDB = require('./config/db');

const { logDoorOpen } = require('./controllers/door.js'); 

// const serveStatic = require('serveStatic')

// Load env variables
dotenv.config({ path: './config/config.env'});

// connectDB() method must be somewhere under the line that loading the environment variables config file (lines above)
connectDB();

// Set up GPIO data here:

// while(1) { monitor GPIO pin for change => call logDoorOpen to create new datapoint on server }

console.log('Initializing GPIO....')
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var doorSwitch = new Gpio(17, 'in', 'both', {debounceTimeout: 200}); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled


console.log('GPIO Initialized.')
console.log('Watching Door...')

doorSwitch.watch(function (err, value) { //Watch for hardware interrupts on doorSwitch GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  if(value===0){
    const log = logDoorOpen();
    console.log(log)
    console.log('Door was opened...')
  } //turn LED on or off depending on the button state (0 or 1)
  else if(value===1){
    console.log('Door was closed...')
  }
});

function unexportOnClose() { //function to run when exiting program
  doorSwitch.unexport(); // Unexport Button GPIO to free resources
};

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
