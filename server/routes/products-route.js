const express = require("express");
const productsRoutes = require("./../controllers/products-controller");

const router = express.Router();

router.get("/all", productsRoutes.productsAll);
router.post("/create", productsRoutes.productsCreate);
router.put("/delete", productsRoutes.productsDelete);
router.put("/reset", productsRoutes.productsReset);

module.exports = router;
