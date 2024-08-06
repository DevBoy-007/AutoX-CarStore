const { displayCart } = require("../Controller/cart-display"); //route
const router = require("express").Router();
router.get("/display-cart", displayCart);
module.exports = router;