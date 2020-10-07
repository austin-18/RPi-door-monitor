const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const DoorSchema = new mongoose.Schema({
    openDate: {
        type: Date,
        default: Date.now(),
        required: true
    }
}, {
    strict: 'throw',
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Door', DoorSchema);