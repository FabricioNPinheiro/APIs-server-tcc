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
router.get("/customers", customerController.findAllCustomers);
router.get("/customer/:id", customerController.findCustomerById);
router.get("/customer/email/:email", customerController.findCustomerByEmail);
router.get("/customers/active", customerController.findAllCustomersActive);
router.get("/customers/roles/:role", customerController.findAllCustomersByRole);
router.patch("/customer/:id", customerController.updateCustomerFieldById);
router.delete("/customer/:id", customerController.deleteCustomerById);

// PRODUCT
router.post("/product", productController.createNewProduct);
router.get("/products", productController.findAllProducts);
router.get("/product/:id", productController.findProductById);
router.get("/product/slug/:slug", productController.findProductBySlug);
router.get("/product/tags/:tag", productController.findProductByTag);
router.patch("/product/:id", productController.updateProductFieldById);
router.delete("/product/:id", productController.deleteProductById);

// ORDER
router.post("/order", orderController.createNewOrder);
router.get("/orders", orderController.findAllOrders);
router.get("/order/:id", orderController.findOrderById);
router.get("/order/status/:status", orderController.findAllOrdersByStatus);
router.get("/order/number/:number", orderController.findOrderByNumber);
router.patch("/order/:id", orderController.updateOrderFieldById);
router.delete("/order/:id", orderController.deleteOrderById);

module.exports = router;
