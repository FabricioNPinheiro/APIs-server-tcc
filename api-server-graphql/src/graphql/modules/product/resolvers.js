import Product from "../../../models/Product";

export default {
  Query: {
    products: async () => await Product.find(),
    product: async (_, { id }) => await Product.findById(id),
    productBySlug: async (_, { slug }) =>
      await Product.findOne({
        slug: slug,
      }),
    productsByTag: async (_, { tag }) =>
      await Product.find({
        tags: tag,
      }),
  },
  Mutation: {
    createProduct: async (_, { data }) => await Product.create(data),
    updateProduct: async (_, { id, data }) =>
      await Product.findOneAndUpdate(id, data, { new: true }),
    deleteProduct: async (_, { id }) => !!(await Product.findOneAndDelete(id)),
  },
};
