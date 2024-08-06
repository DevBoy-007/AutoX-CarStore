const fileupload = require("../fileUpload");  // FileUpload middleware
const { submit_Car } = require("../Controller/suzuki");
const { display_Car } = require("../Controller/suzuki");
const { update_Car } = require("../Controller/suzuki");
const { delete_Car } = require("../Controller/suzuki");
//const { Middleware } = require("../Middleware");
const router = require("express").Router();
/// routes
router.post("/suzukisubmit", fileupload.single("Url"), submit_Car);
router.get("/suzukidisplay", display_Car)
router.put("/suzukiupdate", fileupload.single("Url"), update_Car); 
router.delete("/suzukidelete", delete_Car);
module.exports = router;