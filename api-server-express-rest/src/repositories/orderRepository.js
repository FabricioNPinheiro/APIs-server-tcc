const OrderModel = require('../models/Order');

exports.createNewOrder = async (data) => {
  const response = await OrderModel.create(data);
  return response;
};

exports.findAllOrders = async () => {
  const response = await OrderModel.find({}, 'number status customer items').populate('customer', 'name').populate('items.product', 'title');
  return response;
};
