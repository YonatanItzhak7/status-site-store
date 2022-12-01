const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  productType: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String, required: true },
});
module.exports = mongoose.model("product", Product);
