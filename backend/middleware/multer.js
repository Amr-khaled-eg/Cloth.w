const multer = require("multer");
const uuid = require("uuid").v4;
const { imagesPaths } = require("../global");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    const path = `/${uuid()}-${originalname}`;
    imagesPaths.push(path);
    cb(null, path);
  },
});
module.exports = multer({ storage });
