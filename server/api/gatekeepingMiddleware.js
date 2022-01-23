const jwt = require('jsonwebtoken');

const User = require('../db/models/User');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (err){
    next(err);
  }
}

const isAdmin = (req, res, next) => {
  if(!req.user.isAdmin){
    return res.status(403).send('No. You are a bitter sip of coffee and not an admin');
  } else {
    next(); //user is allowed to keep going
  }
}


const isCurrentUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const {id} = await jwt.verify(token, process.env.JWT);
  if(parseInt(req.params.userId) === id){
    next();
  } else {
    return res.status(403).send("No. You are a bitter sip of coffee and not the current user.");
  }
}

const isAdminOrCurrentUser = async (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = await jwt.verify(token, process.env.JWT);
  if(parseInt(req.params.userId) === id || req.user.isAdmin){
    next();
  }
  else {
    return res.status(403).send('No you are a bitter sip of coffee and not the admin or the current user')
  }
};

module.exports = {
  requireToken, isAdmin, isCurrentUser, isAdminOrCurrentUser
};
