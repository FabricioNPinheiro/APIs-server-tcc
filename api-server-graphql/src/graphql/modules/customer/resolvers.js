import Customer from "../../../models/Customer";

export default {
  Query: {
    customers: async () => await Customer.find(),
    customer: async (_, { id }) => await Customer.findById(id),
  },
  Mutation: {
    createCustomer: (_, { data }) => Customer.create(data),
    updateCustomer: async (_, { id, data }) =>
      await Customer.findOneAndUpdate(id, data, { new: true }),
    deleteCustomer: async (_, { id }) =>
      !!(await Customer.findOneAndDelete(id)),
  },
};
