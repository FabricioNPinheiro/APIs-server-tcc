const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order-controller');
const authService = require('../services/auth.service');

// POST
router.post('/', authService.authorize, orderController.createNewOrder);

// GET
router.get('/', authService.authorize, orderController.findAllOrders);

module.exports = router;
