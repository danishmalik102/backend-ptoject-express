var express = require("express");
const cartControler = require("../controler/cartControler");
var router = express.Router();

/* GET users listing. */
router.post("/add/:userID/:productID", cartControler.addProductToCart);
// router.post("/createUser", userController.createUser);

module.exports = router;