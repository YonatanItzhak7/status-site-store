const Order = require("../models/order-model");

const getOrder = async (req, res) => {
  await Order.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "Order not founded" });
    }
    res.status(200).json({ success: true, result });
  });
};

const getOrderId = async (req, res) => {
  await Order.findById(req.para.id)
    .then((order) => {
      if (!order) {
        return res.json({ success: false, massage: "Order is not available" });
      }
      return res.status(200).json({ success: true, order });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createOrder = async (req, res) => {
  await Order.insertMany(req.body.order).then(() =>
    res.status(300).json({ success: true, message: "Order Created" }))
  .catch((error)=> res.status(400).json({success:false , error:error}))
};

const updateOrder = async(req,res) =>{
    await Order.findByIdAndUpdate(req.params.id,req.body.order)
    .then((orderObj)=> res.status(200).json({success:true, orderObj}))
    .catch((error)=> res.status(400).json({success:false,error}))
} 

const deleteOrder = async (req,res)=>{
    await Order.findByIdAndDelete(req.params.id)
    .then((orderObj)=> res.status(200).json({success:true, orderObj}))
    .catch((error) => res.status(400).json({ success: false, error }));
}

module.exports = {
  getOrder,
  getOrderId,
  createOrder,
  updateOrder,
  deleteOrder
};
