//const { models } = require("../models");

const ProductCategory = require("../models/index");

//const ProductCategory = require("../models/definitions/");

module.exports = {
  createProductCategory: async (data) => {
    const result = await models.ProductCategory.create({
      productID: data.productID,
      categoryID: data.categoryID,
    });
    return result;
  },
}