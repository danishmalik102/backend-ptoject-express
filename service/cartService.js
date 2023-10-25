//const { models } = require("../models/definitions");
const cart = require("../models/definitions/cart");
const products = require("../models/definitions/products");

module.exports = {
    addProductToCart: async (userID, productID) => {
        const result = await cart.findOne({ where: { userID } });
        if (result) {
          // Find the product based on the product ID
          const product = await products.findByPk(productID);
    
          if (product) {
            // Add the product to the user's cart
            await result.addProduct(product);
            return true;
          }
        }
    
        return false;
      },
};