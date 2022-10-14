const repository = require("./customerRepository");

exports.createNewCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = await repository.createNewCustomer({
      name,
      email,
      password: password,
      roles: ["user"],
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
