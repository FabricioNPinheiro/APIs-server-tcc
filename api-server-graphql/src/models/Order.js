import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
    enum: ["created", "done"],
    default: "created",
  },
  totalOrder: {
    type: Number,
    required: true,
  },
  items: [
    {
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
});

export default mongoose.model("Order", OrderSchema);
