const md5 = require('md5');
const repository = require('../repositories/customer-repository');
const emailService = require('../services/email.service');
const authService = require('../services/auth.service');

exports.createNewCustomer = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const data = await repository.createNewCustomer({
      name,
      email,
      password: md5(password),
    });

    await emailService.send(
      email,
      'Bem vindo a Node Store',
      process.env.EMAIL_TMPL.replace('{0}', name),
    );

    res.status(201).json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await repository.authenticate({
      email,
      password: md5(password),
    });

    if (!customer) {
      res.status(404).send({
        message: 'Usuário ou senha inválidos',
      });
    }

    const token = await authService.generateToken({
      id: customer.id,
      email: customer.email,
      name: customer.name,
    });

    res.status(201).send({
      token,
      data: {
        name: customer.name,
        email: customer.email,
      },
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
