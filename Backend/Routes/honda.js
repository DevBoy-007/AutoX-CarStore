const fileupload = require("../fileUpload"); // FileUpload middleware
const { submit_Car } = require("../Controller/honda");
const { display_Car } = require("../Controller/honda");
const { update_Car } = require("../Controller/honda");
const { delete_Car } = require("../Controller/honda");
const { adMiddleware } = require("../admiddleware");
const router = require("express").Router();
/// Routes for the routing
router.post("/hondasubmit", adMiddleware, fileupload.single("Url"), submit_Car);
router.get("/hondadisplay", display_Car);
router.put("/hondaupdate", fileupload.single("Url"), update_Car);
router.delete("/hondadelete", delete_Car);
module.exports = router;
