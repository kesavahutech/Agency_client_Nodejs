const sequelize = require("../Util/database");
const { Sequelize } = require("sequelize");

const Agency = sequelize.define("agency", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Name: {
    type : Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  Address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Address2: {
    type: Sequelize.STRING
  },
  State: {
    type: Sequelize.STRING,
    allowNull: false
  },
  City: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Agency;