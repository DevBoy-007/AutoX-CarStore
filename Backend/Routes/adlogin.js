const { Adloginfunction } = require("../Controller/adlogin"); //route
const router = require("express").Router();
router.post("/Adlogin", Adloginfunction);
module.exports = router;