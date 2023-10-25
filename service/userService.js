//const { models } = require("../models/definitions");
const user = require("../models/definitions/users");
const cart = require("../models/definitions/cart");
const bcrypt = require("bcrypt")
module.exports = {
  getUsers: async () => {
    const result = await models.user.findAll();
    return result;
  },
  createUser: async (data) => {
    //console.log(data);
    const saltRound = 10;
    data.password = bcrypt.hashSync(data.password,saltRound)
    const result = await user.create(data);
    
    const cart = await models.cart.create({ userID: result.id });
    result.setCart(cart);
    return result;
  },
};