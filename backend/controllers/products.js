const Products = require("../models/products");
const { imagesPaths } = require("../global");
const unlink = require("fs").unlink;
const deleteImages = (imagesNames) => {
  for (let i = 0; i < imagesNames.length; i++) {
    unlink(`images/${imagesNames[i]}`, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
};
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
exports.updateProduct = (req, res) => {
  console.log(req.body);
  Products.updateOne(
    { name: req.params.name },
    { price: req.body.price, stock: req.body.stock },
    (err, done) => {
      if (err) {
        res.status(500).json({ success: false, content: "server Error" });
      } else {
        res.status(200).json({ success: true, content: "Product Updated" });
      }
    }
  );
};
exports.removeProduct = (req, res) => {
  Products.findOneAndDelete({ name: req.params.name }, (err, product) => {
    if (err) {
      res.status(500).json({ success: false, content: "server Error" });
    } else {
      deleteImages(product.images);
      res.status(200).json({ success: true, content: "Product Removed" });
    }
  });
};
