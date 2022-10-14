const express = require("express");
const router = express.Router();

const customerController = require("../modules/customer/customerController");
const productController = require("../modules/product/productController");
const orderController = require("../modules/order/orderController");

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.2",
  });
});

// CUSTOMER
router.post("/customer", customerController.createNewCustomer);

// PRODUCT
router.post("/product", productController.createNewProduct);
router.get("/product", productController.findAllProducts);
router.get("/product/:id", productController.findProductById);
router.get("/product/slug/:slug", productController.findProductBySlug);
router.get("/product/tags/:tag", productController.findProductByTag);
router.patch("/product/:id", productController.updateProductFieldById);
router.delete("/product/:id", productController.deleteProductById);

// ORDER
router.post("/order", orderController.createNewOrder);
router.get("/order", orderController.findAllOrders);

module.exports = router;
