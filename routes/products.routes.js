const express = require("express");
const router = express.Router();

const {
  getById,
  
  getAllProductsTesting,
  CreateProduct,
} = require("../controllers/product.controller");

router.post("/", CreateProduct);

router.route("/testing").get(getAllProductsTesting);

router.get("/:id", getById);

module.exports = router;
