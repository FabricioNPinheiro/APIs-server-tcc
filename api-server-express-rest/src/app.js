const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = express.Router();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const routes = router.get('/get', (req, res) => {
  res.status(200).send({
    title: 'Node Store API',
    version: '0.0.1',
  });
});

app.use('/', routes);

module.exports = app;
