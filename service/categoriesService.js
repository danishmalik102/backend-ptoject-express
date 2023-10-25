//const { models } = require("../models/definitions");
const categories = require("../models/definitions/categories");

module.exports = {
  getCategories: async () => {
    const result = await categories.findAll();
    return result;
  },
  createCategories: async (data) => {
    console.log(data);
    const result = await categories.create(data);
    return result;
  },
};