let sequelize = require("../comman/dbConnection");
let user = require("./definitions/users");
let product = require("./definitions/products");
let category = require("./definitions/categories");
let cart = require("./definitions/cart");


// user
// product
// category
// cart

// O-O btw user & cart
user.hasOne(cart, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false },
});
cart.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID", allowNull: false },
});

// M-M btw user & product
user.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "UserProduct",
  as: "Product",
  foreignKey: { name: "userID", allowNull: false },
});

product.belongsToMany(user, {
  onDelete: "CASCADE",
  through: "UserProduct",
  as: " User",
  foreignKey: { name: "productID", allowNull: false },
});

// M-M btw category & product
product.belongsToMany(category, {
  onDelete: "CASCADE",
  through: "ProductCategory",
  as: "Category",
  foreignKey: { name: "productID", allowNull: false },
});

category.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "ProductCategory",
  as: " Product",
  foreignKey: { name: "categoryID", allowNull: false },
});

// M-M btw cart & product
product.belongsToMany(cart, {
  onDelete: "CASCADE",
  through: "ProductCart",
  as: "Cart",
  foreignKey: { name: "productID", allowNull: false },
});

cart.belongsToMany(product, {
  onDelete: "CASCADE",
  through: "ProductCart",
  as: "Product",
  foreignKey: { name: "cartID", allowNull: false },
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { db, models };
