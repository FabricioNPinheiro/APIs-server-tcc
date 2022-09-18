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
    const products = await ProductModel.find({}, 'title slug description price tags');

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
