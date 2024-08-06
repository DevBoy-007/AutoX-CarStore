const Mongoose = require('mongoose');
const suzukiSchema = new Mongoose.Schema({
    Vin: {
        type: String,
        required: true,
        unique: true
    },
    Url: {
        type: String,
        required: true,
        unique: true
    },
    Make: {
        type: String,
        required: true,
    },
    Model: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true,
    },
    Body: {
        type: String,
        required: true,
    },

    Color: {
        type: String,
        required: true,
    },
    Fuel: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },

});
////   Making  collection / table
const suzukiTable = Mongoose.model('suzukiTable', suzukiSchema); // collection / table
module.exports = { suzukiTable };

