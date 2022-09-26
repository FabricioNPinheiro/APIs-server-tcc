const md5 = require('md5');
const repository = require('../repositories/customer-repository');
const emailService = require('../services/email.service');

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
