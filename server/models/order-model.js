const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Order = new Schema({
  orderDate: { type: Date, required: true },
  orderCategory: { type: String, required: true },
  quantityOrder: { type: Number, required: true },
  profit: { type: String, required: true },
});
module.exports = mongoose.model("order", Order);