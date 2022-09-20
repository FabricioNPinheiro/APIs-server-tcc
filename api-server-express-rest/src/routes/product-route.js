const express = require('express');

const router = express.Router();

const productController = require('../controllers/product-controller');

router.post('/', productController.createNewProduct);
router.get('/', productController.findAllProducts);
router.get('/:id', productController.findProductById);
router.get('/slug/:slug', productController.findProductBySlug);
router.get('/tags/:tag', productController.findProductByTag);
router.patch('/:id', productController.updateProductFieldById);
router.delete('/:id', productController.deleteProductById);

module.exports = router;
