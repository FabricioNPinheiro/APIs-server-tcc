import Product from "../../../models/Product";

export default {
  Query: {
    products: async () => await Product.find(),
    product: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    createProduct: async (_, { data }) => await Product.create(data),
    updateProduct: async (_, { id, data }) =>
      await Product.findOneAndUpdate(id, data, { new: true }),
    deleteProduct: async (_, { id }) => !!(await Product.findOneAndDelete(id)),
  },
};
