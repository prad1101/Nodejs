const express = require("express");
const router = express.Router();

const {
    getallproduct,
  getAllProductsTesting,
} = require("../controllers/product.controller");
router.route("/").post(getallproduct);
router.route("/testing").get(getAllProductsTesting);
module.exports = router;
