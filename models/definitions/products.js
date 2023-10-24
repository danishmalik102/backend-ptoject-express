const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let course = sequelize.define(
    "product",
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
     
      : {
        
        allowNull: false,
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
      phoneNumber: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      password: {
        
      }
      
    },
    {
      timestamps: true,
      paranoid: true,
      sequelize,
      modelName: "user",
    }
  );
  module.exports = user;
  
