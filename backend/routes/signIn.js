const controller = require("../controllers/signIn");
module.exports = (app) => {
  app.post("/signIn", controller.signUserIn);
};
