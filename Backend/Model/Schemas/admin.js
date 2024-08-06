const Mongoose = require('mongoose');
const adminSchema = new Mongoose.Schema({
    Name: {
        type: String,
        required: true,

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

});
////   Making  collection / table
const adminTable = Mongoose.model('adminTable', adminSchema); // collection / table
module.exports = { adminTable };