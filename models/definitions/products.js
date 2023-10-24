const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let products = sequelize.define(
    "products",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      productName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      productDescription:{
        allowNull: false,
        type: DataTypes.STRING,
      },
    productPrice: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    productInventory:{
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
    {
      timestamps: true,
      paranoid: true,
      sequelize,
      modelName: "users",
    }
  
  );
  module.exports = users;
  
