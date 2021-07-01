const Orders = require("../models/orders");
const jwt = require("jsonwebtoken");
const Products = require("../models/products");
const updateProductsQuantity = async (products) => {
  for (let i = 0; i < products.length; i++) {
    try {
      const product = await Products.findOne({ name: products[i].name });
      product.stock -= products[i].quantity;
      product.save();
    } catch (e) {
      console.error(e);
    }
  }
};
exports.postOrder = async (req, res) => {
  const { authorization } = req.headers;
  let user = "guest user";
  try {
    if (authorization) user = jwt.verify(authorization, "NEW_SESSION").id;
    await Orders.create({
      user: user,
      date: new Date().toLocaleString(),
      ...req.body,
    });
    updateProductsQuantity(req.body.products);
    res.status(200).json({ success: true, content: "order added" });
  } catch (e) {
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Orders.find({});
    res.status(200).json({ success: true, content: { orders } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
