import Order from "../../../models/Order";

export default {
  Query: {
    orders: async () =>
      await Order.find({}, "number status customer items totalOrder")
        .populate("customer")
        .populate("items"),
    order: async (_, { id }) =>
      await Order.findById(id, "number status customer items totalOrder")
        .populate("customer")
        .populate("items"),
    ordersByStatus: async (_, { status }) =>
      await Order.find(
        {
          status: status,
        },
        "number status customer items totalOrder"
      )
        .populate("customer")
        .populate("items"),
    orderByNumber: async (_, { number }) =>
      await Order.findOne(
        {
          number: number,
        },
        "number status customer items totalOrder"
      )
        .populate("customer")
        .populate("items"),
  },
  Mutation: {
    createOrder: async (_, { data }) => await Order.create(data),
    updateOrder: async (_, { id, data }) =>
      await Order.findOneAndUpdate(id, data, { new: true }),
    deleteOrder: async (_, { id }) => !!(await Order.findOneAndDelete(id)),
  },
};
