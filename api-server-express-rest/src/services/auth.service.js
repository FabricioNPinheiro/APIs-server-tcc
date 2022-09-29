const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => jwt.sign(data, process.env.SEND_GRID_KEY, { expiresIn: '1d' });

exports.decodeToken = async (token) => {
  const data = await jwt.verify(token, process.env.SEND_GRID_KEY);
  return data;
};

// eslint-disable-next-line func-names
exports.authorize = function (req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401).json({
      message: 'Acesso Restrito',
    });
  } else {
    jwt.verify(token, process.env.SEND_GRID_KEY, (error) => {
      if (error) {
        res.status(401).json({
          message: 'Token Inválido',
        });
      } else {
        next();
      }
    });
  }
};
