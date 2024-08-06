const Mongoose = require('mongoose');
const toyotaSchema = new Mongoose.Schema({
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
const toyotaTable = Mongoose.model('toyotaTable', toyotaSchema); // collection / table
module.exports = { toyotaTable };