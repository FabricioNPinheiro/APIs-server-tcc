const repository = require('../repositories/product-repository');

exports.createNewProduct = async (req, res) => {
  try {
    const data = await repository.createNewProduct(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAllProducts = async (req, res) => {
  try {
    const data = await repository.findAllProducts();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.findProductById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const data = await repository.findProductBySlug(slug);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findProductByTag = async (req, res) => {
  const { tag } = req.params;
  try {
    const data = await repository.findProductByTag(tag);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateProductFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.updateProductFieldById(id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.deleteProductById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
