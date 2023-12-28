require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDb = require("../node/Database/connect");
const product_routes = require("../node/routes/products.routes");
// set router

app.use(bodyParser.json({}))

app.use("/api/products", product_routes);

//server 

const start = async () => {
  try {
    connectDb();
    app.listen(2000, () => {
      console.log("hello i am connected 2000")
    });
  } catch (error) {
    console.log("this is the error", error);
  }
};

start();
