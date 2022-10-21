const OrderModel = require("../../models/Order");

exports.createNewOrder = async (data) => {
  const response = await OrderModel.create(data);
  return response;
};

exports.findAllOrders = async () => {
  const response = await OrderModel.find({}, "number status customer items")
    .populate("customer", "name")
    .populate("items.product", "title");
  return response;
};

exports.findById = async (customerId) => {
  const response = await OrderModel.findById(
    customerId,
    "number status customer items"
  )
    .populate("customer", "name")
    .populate("items.product", "title");
  return response;
};

exports.findAllByStatus = async (status) => {
  const response = await OrderModel.find(
    {
      status: status,
    },
    "number status customer items"
  )
    .populate("customer", "name")
    .populate("items.product", "title");
  return response;
};

exports.findOneByNumber = async (number) => {
  const response = await OrderModel.findOne(
    {
      number: number,
    },
    "number status customer items"
  )
    .populate("customer", "name")
    .populate("items.product", "title");

  return response;
};

exports.updateFieldById = async (id, body) => {
  const response = await OrderModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return response;
};

exports.deleteById = async (id) => {
  const response = await OrderModel.findByIdAndRemove(id);
  return response;
};
