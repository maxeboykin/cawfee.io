const Sequelize = require('sequelize');
const db = require('../db');

const OrderCoffee = db.define("ordercoffee", {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 0
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 100000
    }
  }
})
module.exports = OrderCoffee;
