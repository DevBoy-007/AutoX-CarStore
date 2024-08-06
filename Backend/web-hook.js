const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');
const { cartTable } = require('./Model/Schemas/cart'); // Import your Cart model
const rawBodyMiddleware = require('./rawmiddleware')

const stripe = new Stripe('sk_test_51PdAdPRtxL6V3k3BQmdkGqKi1D1X7NE597t9IGQtt7Kr4ymA1BUOuctXQ8uPI2xzFSARhtBnq1p5LaDTyPGG54BK007WoSQ42p');
const endpointSecret = 'whsec_5UtNvcvLB9lx69h8FmSr6GY0uWgFgrzB'; // replace with your actual secret
const router = express.Router();

router.post('/webhook', rawBodyMiddleware, async (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        // Extract the cartId from the metadata
        const cartId = session.metadata._id;

        // Remove the cart item from the database
        try {
            await cartTable.findByIdAndDelete(cartId);
            console.log(`Cart item removed successfully`);
        } catch (error) {
            console.error('Error removing cart item:', error);
        }
    }

    res.json({ received: true });
});

module.exports = router;
