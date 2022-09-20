const express = require('express');

const router = express.Router();

const productController = require('../controllers/product-controller');

// POST
router.post('/', productController.createNewProduct);

// GET
router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProductById);
router.get('/slug/:slug', productController.findProductBySlug);
router.get('/tags/:tag', productController.findProductByTag);

// PATCH
router.patch('/:id', productController.updateProductFieldById);

// DELETE
router.delete('/:id', productController.deleteProductById);

module.exports = router;
