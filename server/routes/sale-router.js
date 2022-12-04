const router = require("express").Router();

const {
  getSales,
  getSaleId,
  createSale,
  updateSale,
  deleteSale,
} = require("../controllers/sale-ctrl");

router.get("/", getSales);
router.get("/id/:id", getSaleId);
router.post("/create", createSale);
router.put("/update/:id", updateSale);
router.delete("/delete/:id", deleteSale);

module.exports = router;
