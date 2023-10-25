var express = require("express");
const productsControler = require("../controler/productsControler");
const productCategoryControler = require("../controler/productCategoryControler");

var router = express.Router();

/* GET users listing. */

router.get("/products", productsControler.getProducts);
router.get("/products/:id", productsControler.getProductById);
router.post("/products", productsControler.createProducts);
router.post("/productCategory", productCategoryControler.createProductCategory);
router.put("/updateProduct/:id", productsControler.updateProduct);
router.delete("/deleteProduct/:id", productsControler.deleteProduct);


module.exports = router;