const md5 = require('md5');
const repository = require('../repositories/customer-repository');

exports.createNewCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = await repository.createNewCustomer({
      name,
      email,
      password: md5(password),
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
