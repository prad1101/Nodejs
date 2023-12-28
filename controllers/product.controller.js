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

const getAllProducts = async (req, res, next) => {
  const result = await ProductModel.find();
  res.status(200).json({ msg: result });
  next();
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  const product = await ProductModel.findOne({ _id: id });
  res.status(200).json({ msg: product });
};

const DeleteProduct = async (req, res, next) => {
  const id = req.params.id;
  const productExist = await ProductModel.findOne({ _id: id });
  if (!productExist) {
    return res.status(404).json({ msg: "No Product Exist To Delete" });
  }
  const product = await ProductModel.deleteOne({ _id: id });
  res.status(200).json({ msg: product });
  next();
};

const updateProduct= async(req,res,next)=>{
  try {
    const id=req.params.id;
    const product=await ProductModel.findByIdAndUpdate(id,req.body);
    if(!product){
      return res.status(404).json({msg:"No Id Found To Update "})
    }
    return res.status(200).json({msg:product})
    
  } catch (error) {
   return res.status(500).json({msg:error.message}) 
  }
}



module.exports = {
  getById,
  CreateProduct,
  getAllProducts,
  DeleteProduct,
  updateProduct
};
