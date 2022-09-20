const ProductModel = require('../models/product');

// eslint-disable-next-line no-return-await
exports.createNewProduct = async (data) => await ProductModel.create(data);

// eslint-disable-next-line no-return-await
exports.findAllProducts = async () => await ProductModel.find({}, 'title description price slug tags');

// eslint-disable-next-line no-return-await
exports.findProductById = async (productId) => await ProductModel.findById(productId);

// eslint-disable-next-line no-return-await
exports.findProductBySlug = async (productSlug) => await ProductModel.findOne({
  slug: productSlug,
  active: true,
}, 'title slug description price slug tags');

// eslint-disable-next-line no-return-await
exports.findProductByTag = async (productTag) => await ProductModel.find({
  tags: productTag,
  active: true,
}, 'title slug description price slug tags');

// eslint-disable-next-line no-return-await
exports.updateProductFieldById = async (id, body) => {
  await ProductModel.findByIdAndUpdate(id, body, { new: true });
};

// eslint-disable-next-line no-return-await
exports.deleteProductById = async (id) => await ProductModel.findByIdAndRemove(id);
