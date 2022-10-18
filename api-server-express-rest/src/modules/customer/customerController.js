const repository = require("./customerRepository");

exports.createNewCustomer = async (req, res) => {
  const { name, email, password, roles } = req.body;
  try {
    const data = await repository.createNewCustomer({
      name,
      email,
      password: password,
      active: false,
      roles: roles,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findAllCustomers = async (req, res) => {
  try {
    const data = await repository.findAll();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.findById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findCustomerByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const data = await repository.findOneEmail(email);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findAllCustomersActive = async (req, res) => {
  try {
    const data = await repository.findAllActive();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.findAllCustomersByRole = async (req, res) => {
  const { role } = req.params;
  try {
    const data = await repository.findAllByRole(role);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.updateCustomerFieldById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.updateFieldById(id, req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await repository.deleteById(id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
