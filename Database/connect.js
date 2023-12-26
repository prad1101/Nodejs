const mongoose=require("mongoose")

const connectDatabase=async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URLC)
    console.log("dbconnected")
  } catch (error) {
    console.log(error)
    
  }
}
module.exports=connectDatabase
//mongodb://localhost:27017