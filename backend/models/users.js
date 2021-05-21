const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  address: String,
  phone: String,
});
module.exports = new mongoose.model("user", user);
