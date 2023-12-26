const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "price must be required"],
    },
    company: {
      type: String,
      enum: {
        values: ["apple", "samsumg", "mi"],
        message: `{values} is not supported`,
      },
    },
    isAvailaible: {
      type: Boolean,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("ProductCollection", ProductSchema);
