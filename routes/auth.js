var express = require("express");
const userControler = require("../controler/userControler");

const authenticationControler = require("../controler/authenticationControler");
var router = express.Router();

/* GET users listing. */
router.post("/register", userControler.createUser);

router.post("/login", authenticationControler.login);

module.exports = router;