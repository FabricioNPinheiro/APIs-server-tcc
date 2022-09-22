const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order-controller');

// POST
router.post('/', orderController.createNewOrder);

// GET
router.get('/', orderController.findAllOrders);

module.exports = router;
