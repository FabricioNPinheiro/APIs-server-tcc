const mongoose = require("mongoose");

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  roles: [
    {
      type: String,
      required: true,
      enum: ["user", "admin", "manager", "attendant"],
      default: "user",
    },
  ],
});

const CustomerModel = mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;
