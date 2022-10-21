import Order from "../../../models/Order";

export default {
  Query: {
    orders: async () => await Order.find(),
    order: async (_, { id }) => await Order.findById(id),
    ordersByStatus: async (_, { status }) =>
      await Order.find({
        status: status,
      }),
    orderByNumber: async (_, { number }) =>
      await Order.findOne({
        number: number,
      }),
  },
  Mutation: {
    createOrder: async (_, { data }) => await Order.create(data),
    updateOrder: async (_, { id, data }) =>
      await Order.findOneAndUpdate(id, data, { new: true }),
    deleteOrder: async (_, { id }) => !!(await Order.findOneAndDelete(id)),
  },
};
