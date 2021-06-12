const controller = require("../controllers/cart");
const requireAuth = require("../middleware/requireAuth");
module.exports = (app) => {
  app.post("/cart", requireAuth, controller.addToCart);
  app.get("/cart", requireAuth, controller.getCart);
  app.delete("/cart", requireAuth, controller.removeFromCart);
  app.delete("/cart/all", requireAuth, controller.emptyCart);
};
