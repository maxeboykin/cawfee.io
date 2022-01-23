//this is the access point for all things database related

const db = require('../db');

const User = require('./models/User');
const Coffee = require('./models/Coffee');
const Order = require('./models/Order');
const OrderCoffee = require('./models/OrderCoffee');

//model associations
User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Coffee, {through: OrderCoffee});
Coffee.belongsToMany(Order, {through: OrderCoffee});

module.exports = {
  db,
  models: {
    User,
    Coffee,
    Order
  }
}
