const { middleware } = require("../Middleware")
const fileupload = require("../fileUpload")
const { cart_Function } = require("../Controller/cart"); //route
const router = require("express").Router();
router.post("/cartItems", fileupload.single("url"), middleware, cart_Function);
module.exports = router;