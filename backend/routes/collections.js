const controller = require("../controllers/collections");
module.exports = (app) => {
  app.route("/collections").get(controller.getCollections);
};
