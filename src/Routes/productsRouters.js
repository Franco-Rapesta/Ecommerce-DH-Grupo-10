

const express = require("express");
const router = express.Router();




const productsController = require("../Controllers/productsController");

/*** MUESTRA LISTADO DE PRODUCTOS ***/
router.get("/", productsController.index)
 
/*** AÑADIR PRODUCTO ***/
router.get("/addProduct", productsController.añadirProducto);
router.post("/create", uploadFile.single('imagenProducto'), productsController.crear); 

/* VER CARRITO */
router.get("/carrito", productsController.carrito);

/* VER PRODUCTO */
router.get("/detalle/:id", productsController.detalle);

/* EDITAR PRODUCTO */
router.get("/editProduct/:id", productsController.editarProducto);
router.put("/editProduct/:id", productsController.actualizar); 


/*** ELIMINAR UN PRODUCTO***/ 
router.delete('/:id', productsController.eliminar); 

module.exports = router;    