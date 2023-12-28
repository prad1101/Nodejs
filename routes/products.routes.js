const express = require("express");

const router = express.Router();

const {
  getById,
  getAllProducts,
  CreateProduct,
  DeleteProduct,
  updateProduct,
} = require("../controllers/product.controller");

router.post("/Create", CreateProduct);
router.route("/").get(getAllProducts);
router.get("/:id", getById);
router.delete("/delete/:id",DeleteProduct)
router.put("/update/:id",updateProduct)

module.exports = router;
