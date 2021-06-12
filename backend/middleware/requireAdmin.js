const Users = require("../models/users");
const requireAdmin = (req, res, next) => {
  const id = res.locals.payload.id;
  Users.findOne({ _id: id }, (err, found) => {
    if (err || !found) {
      res.status(500).json({ success: false, content: "server error" });
    } else {
      if (found.role === "admin") {
        next();
      } else {
        res.status(401).json({ success: false, content: "Unauthorized" });
      }
    }
  });
};
module.exports = requireAdmin;
