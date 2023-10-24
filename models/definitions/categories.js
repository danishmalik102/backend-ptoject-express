const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let categories  = sequelize.define(
    "categories",
    {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },

    categoryName: {
        allowNull: true,
      type: DataTypes.STRING,
    },
    },

    {
      timestamps: true,
      paranoid: true,
      sequelize,
      modelName: "categories",
    }
  );
  module.exports = user;
  
