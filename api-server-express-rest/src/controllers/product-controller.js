const repository = require('../repositories/product-repository');

exports.createNewProduct = async (req, res) => {
  try {
    const product = await repository.createNewProduct(req.body);

    res.status(201).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAllProducts = async (req, res) => {
  try {
    const products = await repository.findAllProducts();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await repository.findProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const product = await repository.findProductBySlug(slug);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const product = await repository.findProductByTag(tag);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateProductFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await repository.updateProductFieldById(id, req.body);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await repository.deleteProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
