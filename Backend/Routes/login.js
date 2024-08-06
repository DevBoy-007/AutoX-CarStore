const { login_Function } = require("../Controller/login"); //route
const router = require("express").Router();
router.post("/login", login_Function);
module.exports = router;