const controller = require("../controllers/singUp");
module.exports = (app) => {
  app.post("/signUp", controller.addUser);
};
