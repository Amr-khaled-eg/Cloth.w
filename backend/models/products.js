const mongoose = require("mongoose");
const product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  keywords: [],
  sizes: [],
  images: [],
});
module.exports = new mongoose.model("product", product);
