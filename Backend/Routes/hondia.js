const fileupload = require("../fileUpload");  // FileUpload middleware
const { submit_Car } = require("../Controller/hondia");
const { display_Car } = require("../Controller/hondia");
const { update_Car } = require("../Controller/hondia");
const { delete_Car } = require("../Controller/hondia");
const { adMiddleware } = require("../admiddleware");
const router = require("express").Router();
/// routes
router.post("/hondiasubmit", adMiddleware, fileupload.single("Url"), submit_Car);
router.get("/hondiadisplay", display_Car)
router.put("/hondiaupdate", fileupload.single("Url"), update_Car);
router.delete("/hondiadelete", delete_Car);
module.exports = router;