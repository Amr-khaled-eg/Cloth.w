const Products = require("../models/products");
const { imagesPaths } = require("../global");
exports.getProducts = (req, res) => {
  Products.find({}, (found, err) => {
    if (err) {
      console.error(err);
      res.send("server error");
    } else {
      res.send(found);
    }
  });
};
exports.uploadProduct = (req, res) => {
  new Products({
    name: req.body.title,
    discription: req.body.discription,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock,
    images: imagesPaths,
  }).save((err) => {
    if (err) {
      console.error(err);
      res.send("server error");
    } else {
      res.send({ status: "ok" });
    }
  });
};
exports.getCollections = (req, res) => {
  let currentCollections = [
    { header: "All The Cloth You Like in One Place", image: "/photo.png" },
    { header: "All The Cloth You Like in One Place", image: "/photo2.jpg" },
    { header: "All The Cloth You Like in One Place", image: "/photo3.jpg" },
  ];
  res.send(currentCollections);
};
