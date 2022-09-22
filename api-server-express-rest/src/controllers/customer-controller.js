const repository = require('../repositories/customer-repository');

exports.createNewCustomer = async (req, res) => {
  try {
    const data = await repository.createNewCustomer(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
