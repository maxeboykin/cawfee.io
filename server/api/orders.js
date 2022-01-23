const router = require('express').Router();
const { models: { Order }} = require('../db');
const OrderCoffee = require('../db/models/OrderCoffee');
module.exports = router;

router.get('/', async (req, res, next) => {
try {
  const orders = await OrderCoffee.findAll()
  res.json(orders);
} catch(error) {
  next(error)
}
})


router.get('/:orderId', async (req, res, next) => {
try {
  const order = await OrderCoffee.findAll({
    where: {
      orderId: req.params.orderId
    }
  })
  res.json(order);
} catch(err) {
  next(err);
}
})


module.exports = router;
