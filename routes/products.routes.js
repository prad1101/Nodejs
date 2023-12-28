const express = require("express");

const router = express.Router();

const {
  getById,
  getAllProductsTesting,
  CreateProduct,
  DeleteProduct,
} = require("../controllers/product.controller");

router.post("/", CreateProduct);
router.route("/testing").get(getAllProductsTesting);
router.get("/:id", getById);
router.delete("/delete/:id",DeleteProduct)

module.exports = router;
