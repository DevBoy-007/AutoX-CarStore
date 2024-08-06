const fileupload = require("../fileUpload");  // FileUpload middleware
const { submit_Car } = require("../Controller/bmw");
const { display_Car } = require("../Controller/bmw");
const { update_Car } = require("../Controller/bmw");
const { delete_Car } = require("../Controller/bmw");
const { adMiddleware } = require("../admiddleware");
const router = require("express").Router();
/// routes
router.post("/bmwsubmit", adMiddleware, fileupload.single("Url"), submit_Car);
router.get("/bmwdisplay", display_Car);
router.put("/bmwupdate", fileupload.single("Url"), update_Car);
router.delete("/bmwdelete", delete_Car);
module.exports = router;