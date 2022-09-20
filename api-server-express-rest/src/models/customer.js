const mongoose = require('mongoose');

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
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

module.exports = CustomerModel;
