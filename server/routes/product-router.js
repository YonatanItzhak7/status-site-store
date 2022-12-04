const router = require("express").Router();

const {
  getProducts,
  getProductId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-ctrl");

router.get("/", getProducts);
router.get("/id/:id", getProductId);
router.post("/create", createProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

module.exports = router;
