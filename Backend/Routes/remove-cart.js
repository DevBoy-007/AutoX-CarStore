const { removeCart } = require("../Controller/remove-cart"); //route
const router = require("express").Router();
router.delete("/remove-cart", removeCart);
module.exports = router;