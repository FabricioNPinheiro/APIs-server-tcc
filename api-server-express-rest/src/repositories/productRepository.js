const ProductModel = require('../models/Product');

exports.createNewProduct = async (data) => {
  const response = await ProductModel.create(data);
  return response;
};

exports.findAllProducts = async () => {
  const response = await ProductModel.find({}, 'title description price slug tags');
  return response;
};

exports.findProductById = async (productId) => {
  const response = await ProductModel.findById(productId);
  return response;
};

exports.findProductBySlug = async (productSlug) => {
  const response = await ProductModel.findOne({
    slug: productSlug,
    active: true,
  }, 'title slug description price slug tags');

  return response;
};

exports.findProductByTag = async (productTag) => {
  const response = await ProductModel.find({
    tags: productTag,
    active: true,
  }, 'title slug description price slug tags');
  return response;
};

exports.updateProductFieldById = async (id, body) => {
  const response = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  return response;
};

exports.deleteProductById = async (id) => {
  const response = await ProductModel.findByIdAndRemove(id);
  return response;
};
