const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  ProductName: { type: String },
  ProductType: { type: String, required: true },
  ProductNumber: { type: Number, required: true },
  NumberOfProducts: { type: Number, required: true },
  company: { type: String },
});
module.exports = mongoose.model("product", Product);
