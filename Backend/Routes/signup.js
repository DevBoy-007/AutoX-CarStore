const { signup_Function } = require("../Controller/signup"); //route
const router = require("express").Router();
router.post("/signup", signup_Function);
module.exports = router;