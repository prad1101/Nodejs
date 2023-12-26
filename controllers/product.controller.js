const ProductModel = require("../model/product.model");
const product = require("../model/product.model");

const getallproduct = async (req, res) => {
  try {
    console.log(req);
    const { name, price, company, isAvalaible } = req.body;
    const productexist =await product.findOne({ name: name });
    if (productexist) {
      return res.status(400).json({ msg: "already exists" });
    }
    const productcreated = await product.create({ name, price, company, isAvalaible });
    return res.status(200).json({msg:productcreated});
  } catch (err) {
    return res.status(500).json({msg:err})
  }
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "get all products testing" });
};

module.exports = { getallproduct, getAllProductsTesting };
