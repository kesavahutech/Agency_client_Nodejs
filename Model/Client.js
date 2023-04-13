const { Sequelize } = require("sequelize");
const sequelize = require("../Util/database");

const Client = sequelize.define("client", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique : true
  },
  Phone: {
    type: Sequelize.STRING,
    allowNull: false,
    unique : true
  },
  TotalBill: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
});

module.exports = Client;
