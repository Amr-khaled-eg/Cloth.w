const mongoose = require("mongoose");
const product = new mongoose.Schema({
  name: String,
  discription: String,
  price: Number,
  category: String,
  stock: Number,
  color: String,
  sizes: [],
  images: [],
});
module.exports = new mongoose.model("product", product);
