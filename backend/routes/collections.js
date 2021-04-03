const controller = require("../controllers/users");
module.exports = (app) => {
  app.route("/collections").get(controller.getCollections);
};
