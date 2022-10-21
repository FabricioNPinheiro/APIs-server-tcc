const guid = require("guid");
const repository = require("./orderRepository");

exports.createNewOrder = async (req, res) => {
  const { customer, items } = req.body;
  try {
    await repository.createNewOrder({
      customer: customer,
      number: guid.raw().substring(0, 6),
      items: items,
    });

    res.status(201).send({ message: "Pedido criado com sucesso" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAllOrders = async (req, res) => {
  try {
    const data = await repository.findAllOrders();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.findById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findAllOrdersByStatus = async (req, res) => {
  const { status } = req.params;
  try {
    const data = await repository.findAllByStatus(status);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findOrderByNumber = async (req, res) => {
  const { number } = req.params;
  try {
    const data = await repository.findOneByNumber(number);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateOrderFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.updateFieldById(id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.deleteById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
