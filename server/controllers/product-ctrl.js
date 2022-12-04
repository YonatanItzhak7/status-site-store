const Product = require("../models/product-model");

const getProducts = async (req, res) => {
  await Product.find({}).then((results, err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    if (results.length == 0) {
      return res.json({ success: false, message: "No Products available" });
    }
    res.status(200).json({ success: true, results });
  });
};

const getProductId = async (req, res) => {
  await Product.findById(req.param.id)
    .then((product) => {
      if (!product) {
        return res.json({ success: false, massage: "Products is not available" });
      }
      return res.status(200).json({ success: true, products });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createProduct = async (req, res) => {
  await Product.insertMany(req.body.product)
    .then(() =>
      res.status(300).json({ success: true, message: "Products Created" })
    )
    .catch((error) => res.status(400).json({ success: false, error: error }));
};

const updateProduct = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body.product)
    .then((Product) => res.status(200).json({ success: true, Product }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
    .then((obj) => res.status(200).json({ success: true, user }))
    .catch((error) => res.status(400).json({ success: false, error }));
};

module.exports = {
  getProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct
}