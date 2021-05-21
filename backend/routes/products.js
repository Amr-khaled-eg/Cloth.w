const controller = require("../controllers/products");
const upload = require("../middleware/multer");
module.exports = (app) => {
  app
    .route("/products")
    .get(controller.getProducts)
    .post(upload.array("images"), controller.uploadProduct);
  app.get("/products/:name", controller.getProduct);
};
