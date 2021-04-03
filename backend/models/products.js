const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cloth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const product = new mongoose.Schema({
  name: String,
  discription: String,
  price: Number,
  category: String,
  stock: Number,
  images: [],
});
module.exports = new mongoose.model("product", product);
