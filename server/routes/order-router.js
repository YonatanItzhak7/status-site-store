const router = require("express").Router();

const {
  getOrder,
  getOrderId,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/order-ctrl");

router.get("/", getOrder);
router.get("/id/:id", getOrderId);
router.post("/create", createOrder);
router.put("/update/:id", updateOrder);
router.delete("/delete/:id", deleteOrder);

module.exports = router;
