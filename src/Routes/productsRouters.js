const productsController = require("../Controllers/productsController");

const express = require("express");
const router = express.Router();


router.get("/", productsController.listaProducts)
 
router.get("/carrito", productsController.carrito);
router.get("/:id", productsController.detalle);
router.get("/addProduct", productsController.addProduct);
router.get("/editProduct", productsController.editProduct);

module.exports = router;