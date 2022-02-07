//this is the access point for all things database related

const db = require('./db');

const User = require('./models/User');
const Coffee = require('./models/Coffee');
const Order = require('./models/Order');
const OrderCoffee = require('./models/OrderCoffee');
const Brand = require('./models/Brand');

//model associations
User.hasMany(Order);
Order.belongsTo(User);

Brand.hasMany(Coffee);
Coffee.belongsTo(Brand);

Order.belongsToMany(Coffee, {through: OrderCoffee});
Coffee.belongsToMany(Order, {through: OrderCoffee});

module.exports = {
  db,
  models: {
    User,
    Coffee,
    Order,
    Brand
  }
}
