const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customer-controller');

// POST
router.post('/', customerController.createNewCustomer);

module.exports = router;
