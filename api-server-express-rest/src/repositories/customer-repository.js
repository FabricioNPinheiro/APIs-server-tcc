const CustomerModel = require('../models/customer');

exports.createNewCustomer = async (data) => {
  const response = await CustomerModel.create(data);
  return response;
};
