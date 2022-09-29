const CustomerModel = require('../models/Customer');

exports.createNewCustomer = async (data) => {
  const response = await CustomerModel.create(data);
  return response;
};

exports.authenticate = async (data) => {
  const response = await CustomerModel.findOne({
    id: data.id,
    email: data.email,
    password: data.password,
  });
  return response;
};

exports.getById = async (id) => {
  const response = await CustomerModel.findById(id);
  return response;
};