const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let course = sequelize.define(
    "user",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
     
      email: {
        
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
  
