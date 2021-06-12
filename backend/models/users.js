const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  address: String,
  phone: String,
  cart: [
    {
      size: String,
      quantity: Number,
      image: String,
      name: String,
      price: Number,
      color: String,
    },
  ],
  role: String,
});
module.exports = new mongoose.model("user", user);
