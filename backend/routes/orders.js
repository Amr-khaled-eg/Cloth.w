const controller = require("../controllers/orders");
const requireAuth = require("../middleware/requireAuth");
const requireAdmin = require("../middleware/requireAdmin");
module.exports = (app) => {
  app.post("/orders", controller.postOrder);
  app.get("/orders", requireAuth, requireAdmin, controller.getAllOrders);
};
