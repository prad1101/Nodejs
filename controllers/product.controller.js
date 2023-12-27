const ProductModel = require("../model/product.model");

const CreateProduct = async (req, res) => {
  try {
    const payload = req.body;
    const productexist = await ProductModel.findOne({ name: payload.name });
    if (productexist) {
      return res.status(400).json({ msg: "already exists" });
    }
    const productcreated = await ProductModel.create(payload);
    return res.status(200).json({ msg: productcreated });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

const getAllProductsTesting = async (req, res, next) => {
  const result = await ProductModel.find().skip(0).limit(20);
  res.status(200).json({ msg: result });
  next();
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  const product = await ProductModel.findOne({ _id: id });
  res.status(200).json({ msg: product });
  next();
};






module.exports = { getById, CreateProduct, getAllProductsTesting };

// JWT
//
