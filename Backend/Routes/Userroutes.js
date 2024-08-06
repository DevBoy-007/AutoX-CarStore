const { Adsignfunction } = require("../Controller/Usercontroller"); //route
const { getFunction } = require("../Controller/Usercontroller"); //route
const { updateFunction } = require("../Controller/Usercontroller"); //route
const { deleteFunction } = require("../Controller/Usercontroller"); //route
const router = require("express").Router();
router.post("/AdsignIn", Adsignfunction);
router.get("/getsignIn", getFunction);
router.put("/updatesignIn", updateFunction);
router.delete("/deletesignIn", deleteFunction);
module.exports = router;