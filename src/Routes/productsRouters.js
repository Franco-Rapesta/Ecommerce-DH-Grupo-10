const productsController = require("../Controllers/productsController");

const express = require("express");
const router = express.Router();

router.get("/carrito", productsController.carrito);

router.get("/detalle-producto", productsController.detalle);


module.exports = router;