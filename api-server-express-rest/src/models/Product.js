const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
