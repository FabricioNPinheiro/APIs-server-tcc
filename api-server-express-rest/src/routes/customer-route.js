const express = require('express');

const router = express.Router();

const customerController = require('../controllers/customerController');
const authService = require('../services/auth.service');

// POST
router.post('/', customerController.createNewCustomer);
router.post('/authenticate', customerController.authenticate);
router.post('/refresh-token', authService.authorize, customerController.refreshToken);

module.exports = router;
