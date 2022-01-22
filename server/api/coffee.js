const router = require('express').Router();
const {models: {Coffee}} = require('../db');
const { requireToken, isAdmin} = require('./gatekeepingMiddleware');

router.get('/', async (req, res, next) => {
try {
  const coffees = await Coffee.findAll()
  res.json(coffees)
} catch (error) {
  next(error)
}
})

router.post('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const newCoffee = await Coffee.create(req.body);
    res.status(201).send(newCoffee);
  } catch (error) {
    next(error);
  }
})

router.get('/:coffeeId', async (req, res, next) => {
  try {
    const singleCoffee = await Coffee.findByPk(req.params.coffeeId)
    res.json(singleCoffee)
  } catch (error) {
    next(error)
  }
  })

router.put('/:coffeeId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const targetedCoffee = await Coffee.findByPk(req.params.coffeeId);
    const updatedCoffee = await targetedCoffee.update(req.body);
    res.json(updatedCoffee);
  } catch (error) {
    next(error)
  }
})

router.delete('/:coffeeId', requireToken, isAdmin, async (req, res, next) => {
  try {
    const targetedCoffee = await Coffee.findbyPk(req.params.coffeeId);
    const deletedCoffee = await targetedCoffee.destroy();
    res.json(deletedCoffee);
  } catch(error) {
    next(error)
  }
})


module.exports = router;
