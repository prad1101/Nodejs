const mongoose=require("mongoose")

const connectDatabase=async ()=>{
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/ProductDb')
    .then(() => console.log('Connected!'));
  } catch (error) {
    console.log(error)
  }
}
module.exports=connectDatabase
//mongodb://localhost:27017