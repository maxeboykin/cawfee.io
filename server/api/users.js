const router = require('express').Router();

router.get('/', function (req, res, next) {

})

router.get('/:userId', function (req, res, next) {

})

router.get('/:userId/current-order', function (req, res, next) {

})

router.get('/:userId/current-order/coffee/:coffeeId', function (req, res, next) {

})

router.delete('/:userId/current-order/coffee/:coffeeId', function (req, res, next) {

})



router.post('/:userId/current-order/coffee/:coffeeId', function (req, res, next) {

})

router.put('/:userId/current-order/coffee/:coffeeId', function (req, res, next) {

})

router.put('/:userId/current-order', function (req, res, next) {

})



module.exports = router;
