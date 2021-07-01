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
exports.getProducts = async (req, res) => {
  try {
    // .lean() will give me just a json object not  the big document that mongoose returns
    const products = await Products.find({}).lean();
    res.status(200).json({ success: true, content: products });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const product = await Products.findOne({ name: req.params.name }).lean();
    res.status(200).json({ success: true, content: product });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.uploadProduct = async (req, res) => {
  try {
    const { keywords, ...body } = req.body;
    await Products.create({
      ...body,
      keywords: keywords.split(" "),
      images: imagesPaths,
    });
    imagesPaths.splice(0, imagesPaths.length);
    res.status(200).json({ success: true, content: "product uploaded" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    await Products.updateOne(
      { name: req.params.name },
      { price: req.body.price, stock: req.body.stock }
    ).lean();
    res.status(200).json({ success: true, content: "Product Updated" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.removeProduct = async (req, res) => {
  try {
    const deletedProduct = await Products.findOneAndDelete({
      name: req.params.name,
    }).lean();
    deleteImages(deletedProduct.images);
    res.status(200).json({ success: true, content: "Product Removed" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.searchProducts = async (req, res) => {
  // here i will search if the use typed a name of a product
  // and if they typed i will send the product back if the did not type
  // i will search by the keywords
  try {
    const filters = req.query;
    let results = [];
    const nameResult = await Products.find({
      name: filters.keywords,
    }).lean();
    const keywordsResult = await Products.find({
      keywords: { $in: filters.keywords.split(" ") },
    }).lean();
    results = [...nameResult, keywordsResult];
    results.length
      ? res.status(200).json({ success: true, content: keywordsResult })
      : res.status(404).json({ success: false, content: "not found" });
  } catch (e) {
    console.error(e);
  }
};
