const Sale = require("../models/sale-model");

const getSales = async (req, res) => {
  await Sale.find({}).then((result, err) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    if (result.length == 0) {
      return res.json({ success: false, message: "No Sales available" });
    }
    res.status(200).json({ success: true, result });
  });
};

const getSaleId = async (req, res) => {
  await Sale.findById(req.para.id)
    .then((sale) => {
      if (!sale) {
        return res.json({
          success: false,
          message: "Sale is not available",
        });
      }
      return res.status(200).json({ success: true, sale });
    })
    .catch((error) => res.status(400).json({ success: false, error }));
};

const createSale = async (req, res) => {
    await Sale.insertMany(req.body.sale)
      .then(() =>
        res.status(300).json({ success: true, message: "Products Created" })
      )
      .catch((error) => res.status(400).json({ success: false, error: error }));
  };
  
  const updateSale = async (req, res) => {
    await Sale.findByIdAndUpdate(req.params.id, req.body.sale)
      .then((sale) => res.status(200).json({ success: true, sale }))
      .catch((error) => res.status(400).json({ success: false, error }));
  };
  
  const deleteSale = async (req, res) => {
    await Sale.findByIdAndDelete(req.params.id)
      .then((obj) => res.status(200).json({ success: true, user }))
      .catch((error) => res.status(400).json({ success: false, error }));
  };


  module.exports = {
    getSales,
    getSaleId,
    createSale,
    updateSale,
    deleteSale
  }
  