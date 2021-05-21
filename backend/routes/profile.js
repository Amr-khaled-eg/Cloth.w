const controller = require("../controllers/profile");
const requireAuth = require("../middleware/requireAuth");
module.exports = (app) => {
  app.get("/profile/:id", requireAuth, controller.getProfile);
};
