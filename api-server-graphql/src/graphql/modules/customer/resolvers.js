import Customer from "../../../models/Customer";

export default {
  Query: {
    customers: async () => await Customer.find(),
    customer: async (_, { id }) => await Customer.findById(id),
    customerByEmail: async (_, { email }) =>
      await Customer.findOne({
        email: email,
      }),
    customersActive: async () =>
      await Customer.find({
        active: true,
      }),
    customersByRoles: async (_, { role }) =>
      await Customer.find({
        roles: role,
      }),
  },
  Mutation: {
    createCustomer: (_, { data }) => Customer.create(data),
    updateCustomer: async (_, { id, data }) =>
      await Customer.findOneAndUpdate(id, data, { new: true }),
    deleteCustomer: async (_, { id }) =>
      !!(await Customer.findOneAndDelete(id)),
  },
};
