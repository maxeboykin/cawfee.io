const router = require('express').Router();
const {models: {User, Order, Coffee }} = require('../db');
const OrderCoffee = require('../db/models/OrderCoffee');
const {requireToken, isAdmin, isCurrentUser, isAdminOrCurrentUser } = require('./gatekeepingMiddleware');



router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: Order,
      attributes: ['id', 'username']
    })
    res.json(users);
  } catch (err) {
    next(err);
  }
})

router.get('/:userId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const singleUser = await User.findOne({
      where: {
        id: req.params.userId
      },
      include: Order
    })
    res.json(singleUser)
  } catch(err){
    next(err);
  }
})

router.get('/:userId/current-order', requireToken, isAdmin, async (req, res, next) => {
  try {
    const targetOrder = await Order.findOne({
      where:{
        userId: req.params.userId,
        isCart: true
      }
    })
    const userOrder = await OrderCoffee.findAll({
      where: {
        orderId: targetOrder.id
      }
    })
    res.json(userOrder);
  } catch(err){
    next(err)
  }
})

router.get('/:userId/current-order/coffee/:coffeeId', requireToken, isCurrentUser, async (req, res, next) => {
  try {
    const targetOrder = await Order.findOne({
      where: {
        userId: req.params.userId,
        isCart:true
      }
    })
    const orderedCoffee = await OrderCoffee.findAll({
      where: {
        orderId: targetOrder.id,
        coffeeId: req.params.coffeeId
      }
    })
    res.json(orderedCoffee)
  } catch(err){
    next(err)
  }
})

router.delete('/:userId/current-order/coffee/:coffeeId', requireToken, isCurrentUser, async (req, res, next) => {
try {
  const targetOrder = await Order.findOne({
    where: {
      userId: req.params.userId,
      isCart: true
    }
  })
  await targetOrder.removeCoffees(req.params.coffeeId); //magic methods
  res.json(targetOrder)
} catch(err){
  next(err)
}
})



router.post('/:userId/current-order/coffee/:coffeeId', async (req, res, next) => {
  let addedQuantity = parseInt(req.body.qty);
  if(addedQuantity && addedQuantity > 0){
    try {
      const targetCoffee = await Coffee.findByPk(req.params.coffeeId)
      let price = targetCoffee.price;
      const targetOrder = await Order.findOne({
        where: {
          userId: req.params.userId,
          isCart: true
        }
      })
      const orderCoffeeThru = await OrderCoffee.findOne({
        where: {
          orderId: targetOrder.id,
          coffeeId: req.params.coffeeId
        }
      })
      let updatedQuantity = addedQuantity
      if(orderCoffeeThru){
        let prevQuantity = parseInt(orderCoffeeThru.quantity)
        updatedQuantity += prevQuantity
        await OrderCoffee.update(
          {quantity: updatedQuantity},
          {
            where: {
              orderId: targetOrder.id,
              coffeeId: req.params.coffeeId
            }
          }
        )
      } else {
        await targetOrder.addCoffees(req.params.coffeeId, {through: {price: price, quantity: updatedQuantity}})
      }
      res.json(orderCoffeeThru)
    } catch(err){
      next(err)
    }
  } else {
    res.status(500).send("invalid number");
  }

})

router.put('/:userId/current-order/coffee/:coffeeId', requireToken, isCurrentUser, async (req, res, next) => {
  let updatedQuantity = req.body.newQty;
  if(updatedQuantity && updatedQuantity > 0){
    try {
      const targetOrder = await Order.findOne({
        where: {
          userId: req.params.userId,
          isCart:true
        }
      })
      await OrderCoffee.update(
        {quantity: updatedQuantity},
        {
          where: {
            orderId: targetOrder.id,
            coffeeId: req.params.coffeeId
          }
        })
        res.json(targetOrder)
    } catch(err){
      next(err)
    }
  } else {
    res.status(500).send("Invalid number");
  }
})

router.put('/:userId/current-order', async (req, res, next) => {
  try {
    const targetOrder = await Order.update(
      {isCart: false},
      {
        where: {
          userId: req.params.userId,
          isCart:true
        }
      }
    );
    const newOrder = await Order.create();
    newOrder.setUser(req.params.userId);
    res.json(targetOrder);
  } catch(err) {
    next(err)
  }
})



module.exports = router;
