const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let course = sequelize.define(
    "categories",
    {
        id: {
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER,
        },

    categoryNmae: {
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
  
