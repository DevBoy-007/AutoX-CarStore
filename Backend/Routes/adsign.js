const { Adsignfunction } = require("../Controller/adsigin"); //route
const router = require("express").Router();
router.post("/AdsignIn", Adsignfunction);
module.exports = router;