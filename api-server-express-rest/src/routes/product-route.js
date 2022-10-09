const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const authService = require('../services/auth.service');

// POST
router.post('/', authService.isAdmin, productController.createNewProduct);

// GET
router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProductById);
router.get('/slug/:slug', productController.findProductBySlug);
router.get('/tags/:tag', productController.findProductByTag);

// PATCH
router.patch('/:id', authService.isAdmin, productController.updateProductFieldById);

// DELETE
router.delete('/:id', authService.isAdmin, productController.deleteProductById);

module.exports = router;
