const guid = require("guid");
const repository = require("./orderRepository");

exports.createNewOrder = async (req, res) => {
  try {
    await repository.createNewOrder({
      customer: data.id,
      number: guid.raw().substring(0, 6),
      items: req.body.items,
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
