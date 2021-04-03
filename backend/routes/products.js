const controller = require("../controllers/users");
const upload = require("../middleware/multer");
module.exports = (app) => {
  app
    .route("/products")
    .get(controller.getProducts)
    .post(upload.array("images"), controller.uploadProduct);
};
