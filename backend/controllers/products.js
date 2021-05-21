const Products = require("../models/products");
const { imagesPaths } = require("../global");
exports.getProducts = (req, res) => {
  console.log("get products");
  Products.find({}, (err, found) => {
    if (err) {
      console.error(err);
      res.send("server error");
    } else {
      res.send(found);
    }
  });
};
exports.getProduct = (req, res) => {
  Products.find({ name: req.params.name }, (err, found) => {
    if (err) {
      console.error(err);
      res.send("server error");
    } else {
      res.send(found[0]);
    }
  });
};
exports.uploadProduct = (req, res) => {
  console.log(req.body);
  new Products({
    name: req.body.name,
    discription: req.body.discription,
    price: req.body.price,
    category: req.body.category,
    color: req.body.color,
    stock: req.body.stock,
    sizes: req.body.sizes,
    images: imagesPaths,
  }).save((err) => {
    imagesPaths.splice(0, imagesPaths.length);
    if (err) {
      console.error(err);
      res.send("server error");
    } else {
      res.send({ status: "ok" });
    }
  });
};
