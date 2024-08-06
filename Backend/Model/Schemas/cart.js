const Mongoose = require('mongoose');
const cartSchema = new Mongoose.Schema({
    customer: {
        id: { type: String, required: true, },
        name: { type: String, required: true },
        cnic: { type: String, required: true, },
        email: { type: String, required: true },
        // Add more customer details as needed
    },
    car: {
        url: {
            type: String,
            required: true,

        },
        make: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true,

        },
        body: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        fuel: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
});

const cartTable = Mongoose.model('cartTable', cartSchema);

module.exports = { cartTable };





