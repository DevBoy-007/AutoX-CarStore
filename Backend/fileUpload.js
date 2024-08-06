const multer = require('multer'); // File Upload
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./Public/images");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileupload = multer({
    storage: storage,
});

module.exports = fileupload;