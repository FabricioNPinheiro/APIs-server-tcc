const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const connectToDatabase = require('./database/connect');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
dotenv.config();
connectToDatabase();

// Carregando Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customer', customerRoute);
app.use('/order', orderRoute);

module.exports = app;
