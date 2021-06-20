const partialsController = require("../Controllers/partialsController");

const express = require("express");
const router = express.Router();

router.get("/", partialsController.index);

module.exports = router;