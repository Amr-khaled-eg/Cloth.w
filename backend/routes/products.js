const controller = require("../controllers/products");
const upload = require("../middleware/multer");
const requireAuth = require("../middleware/requireAuth");
const requireAdmin = require("../middleware/requireAdmin");
module.exports = (app) => {
  app.get("/products/search", controller.searchProducts);
  app
    .route("/products")
    .get(controller.getProducts)
    .post(upload.array("images"), controller.uploadProduct);
  app.get("/products/:name", controller.getProduct);
  app.post(
    "/products/:name",
    requireAuth,
    requireAdmin,
    controller.updateProduct
  );
  app.delete(
    "/products/:name",
    requireAuth,
    requireAdmin,
    controller.removeProduct
  );
};
