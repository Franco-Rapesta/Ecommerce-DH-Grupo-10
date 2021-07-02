const usersController = require("../Controllers/usersController");

const express = require("express");
const router = express.Router();

router.get("/login", usersController.login);
router.get("/registro", usersController.registro);
router.get("/addProduct", usersController.addProduct);
router.get("/editProduct", usersController.editProduct);
module.exports = router;