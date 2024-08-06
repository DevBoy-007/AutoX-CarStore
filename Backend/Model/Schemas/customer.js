const Mongoose = require('mongoose');
const customerSchema = new Mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Id_Card: {
        type: String,
        required: true,
        unique: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
    },

    Cell_Phone: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },

    Address: {
        type: String,
        required: true,
    },
    Gendre: {
        type: String,
        required: true,
    },

    Occupation: {
        type: String,
        required: true,
    },

    Age: {
        type: String,
        required: true,
    },
    TNT: {
        type: String,
        required: true,
    },
    Driving_License: {
        type: String,
        required: true,
    },
});
////   Making  collection / table
const customerTable = Mongoose.model('customerTable', customerSchema); // collection / table
module.exports = { customerTable };