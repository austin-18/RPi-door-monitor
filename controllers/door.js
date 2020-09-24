// NOTE: All model files are to begin with an uppercase letter. 
//       All controller files are to begin with a lowercase letter

// Importing ErrorResponse Class (contains a constructor)
const ErrorResponse = require('../utils/errorResponse');
// importing the asyncHandler middleware that will eliminate the need for try/catch blocks with next() methods
const asyncHandler = require('../middleware/async');
// importing the model into the controller
const Door = require('../models/Door');
const path = require('path');

// Controller files conain the Methods for each route - creates functionality for the route

exports.logDoorOpen = asyncHandler(async () => {
    const doorOpen = await Door.create()

    return doorOpen
});