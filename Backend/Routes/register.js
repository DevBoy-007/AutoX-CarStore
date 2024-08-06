const { register_Function } = require("../Controller/register"); //route
const router = require("express").Router();
router.post("/register", register_Function);
module.exports = router;