const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const authService = require('../services/auth.service');

// POST
router.post('/', authService.authorize, productController.createNewProduct);

// GET
router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProductById);
router.get('/slug/:slug', productController.findProductBySlug);
router.get('/tags/:tag', productController.findProductByTag);

// PATCH
router.patch('/:id', authService.authorize, productController.updateProductFieldById);

// DELETE
router.delete('/:id', authService.authorize, productController.deleteProductById);

module.exports = router;
