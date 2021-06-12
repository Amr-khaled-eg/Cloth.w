const requierAuth = require("../middleware/requireAuth");
const requierAdmin = require("../middleware/requireAdmin");
module.exports = (app) => {
  app.get("/admin", requierAuth, requierAdmin, (req, res) => {
    res.status(200).json({ success: true, content: "that is and admin" });
  });
};
