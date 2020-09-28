
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


var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
// var highPin = new Gpio(16, 'high'); //use GPIO pin 16 as high output for input into GPIO pin 16
// var lowPin = new Gpio(15, 'low'); //use GPIO pin 16 as high output for input into GPIO pin 16

const led = new Gpio(17, 'out');       // Export GPIO17 as an output

// Toggle the state of the LED connected to GPIO17 every 200ms
const iv = setInterval(_ => led.writeSync(led.readSync() ^ 1), 200);

// Stop blinking the LED after 10 seconds
setTimeout(_ => {
  clearInterval(iv); // Stop blinking
  led.unexport();    // Unexport GPIO and free resources
}, 10000);

// var doorSwitch = new Gpio(15, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled
// doorSwitch.watch(function (err, value) { //Watch for hardware interrupts on doorSwitch GPIO, specify callback function
//   console.log('watching....')
//   if (err) { //if an error
//     console.error('There was an error', err); //output error message to console
//   return;
//   }
//   if(value===0){
//     logDoorOpen();
//     console.log('Door was opened...')
//   } //turn LED on or off depending on the button state (0 or 1)
// });

// function unexportOnClose() { //function to run when exiting program
//   // doorSwitch.unexport(); // Unexport Button GPIO to free resources
//   highPin.unexport(); // Unexport Button GPIO to free resources
//   lowPin.unexport();
// };

// process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c
