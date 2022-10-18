const CustomerModel = require("../../models/Customer");

exports.createNewCustomer = async (data) => {
  const response = await CustomerModel.create(data);
  return response;
};

exports.findAll = async () => {
  const response = await CustomerModel.find(
    {},
    "name email password active roles"
  );
  return response;
};

exports.findById = async (customerId) => {
  const response = await CustomerModel.findById(
    customerId,
    "name email password active roles"
  );
  return response;
};

exports.findOneEmail = async (email) => {
  const response = await CustomerModel.findOne(
    {
      email: email,
    },
    "name email password active roles"
  );

  return response;
};

exports.findAllActive = async () => {
  const response = await CustomerModel.find(
    {
      active: true,
    },
    "name email password active roles"
  );
  return response;
};

exports.findAllByRole = async (role) => {
  const response = await CustomerModel.find(
    {
      roles: role,
    },
    "name email password active roles"
  );
  return response;
};

exports.updateFieldById = async (id, body) => {
  const response = await CustomerModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return response;
};

exports.deleteById = async (id) => {
  const response = await CustomerModel.findByIdAndRemove(id);
  return response;
};
