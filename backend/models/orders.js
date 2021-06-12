const mongoose = require("mongoose");
const order = new mongoose.Schema({
  products: [],
  userInfo: {
    name: String,
    address: String,
    email: String,
    phone: String,
  },
  user: String,
  date: String,
});
module.exports = new mongoose.model("order", order);
