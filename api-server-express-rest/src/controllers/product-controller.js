const ProductModel = require('../models/product');

exports.createNewProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({}, 'title description price slug tags');

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const product = await ProductModel.findOne({
      slug,
      active: true,
    }, 'title slug description price slug tags');

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductByTag = async (req, res) => {
  const { tag } = req.params;

  try {
    const product = await ProductModel.findOne({
      tags: tag,
      active: true,
    }, 'title slug description price slug tags');

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateProductFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.findByIdAndRemove(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
