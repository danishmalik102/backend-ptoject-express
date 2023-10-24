var express = require("express");
const userControler = require("../controler/userControler");

const authController = require("../controler/authenticationControler");
var router = express.Router();

/* GET users listing. */
router.post("/register", userControler.createUser);

router.post("/login", authControler.login);

module.exports = router;