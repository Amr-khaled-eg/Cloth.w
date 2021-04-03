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
const Products = new mongoose.model("product", product);
// here i will use curring to make a functoin that will work with any model
const getCollectoinFunctions = (Collection) => {
  return {
    find: (product, callback) => {
      Collection.find(product, callback);
    },
    insert: (product, callback) => {
      new Collection(product).save(callback);
    },
  };
};

module.exports = {
  Products: getCollectoinFunctions(Products),
};
