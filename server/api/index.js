const router = require('express').Router();
router.use('/users', require('./users'));
router.use('/coffee', require('./coffee'));
router.use('/users', require('./users'));


//if an API route doesnt exist ex: api/sloths
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

module.exports = router;
