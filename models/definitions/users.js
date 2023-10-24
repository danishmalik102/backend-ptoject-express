const { DataTypes } = require("sequelize");
let sequelize = require("../../comman/dbConnection");
let users = sequelize.define(
    "users",
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
        allowNull: false,
        type: DataTypes.STRING
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
  
