const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
const stripe = new Stripe('sk_test_51PdAdPRtxL6V3k3BQmdkGqKi1D1X7NE597t9IGQtt7Kr4ymA1BUOuctXQ8uPI2xzFSARhtBnq1p5LaDTyPGG54BK007WoSQ42p');

router.post('/create-checkout-session', async (req, res) => {
  let { amount, _id, make, model, imageUrl } = req.body;
  console.log(imageUrl, "First")
  imageUrl = imageUrl.replace(/\\/g, '/');
  console.log('Received amount:', amount);
  console.log(imageUrl, "Second")
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${make} ${model}`,
              images: [imageUrl]
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:5173/AutoX-Carstore',
      cancel_url: 'http://localhost:5173/AutoX-Carstore/car-cart',
      metadata: {
        _id: _id, // Include cartId in metadata
      },

    });

    console.log('Checkout Session created:', session); // Log the session details

    res.send({
      id: session.id,
    });
  } catch (error) {
    console.error('Error creating Checkout Session:', error); // Log the error
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
