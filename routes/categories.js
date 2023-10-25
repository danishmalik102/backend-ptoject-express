var express = require("express");
const categoriesControler = require("../controler/categoriesControler");

var router = express.Router();

/* GET users listing. */

router.get("/categories", categoriesControler.getCategories);
router.post("/categories", categoriesControler.createCategories);
module.exports = router;