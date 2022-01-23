const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const axios = require('axios');
const Order = require('./Order');

const SALT_ROUNDS = 5;

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [6, 128]
    }
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail:true
    }
  }

})

module.exports = User;


//instance methods
User.prototype.correctPassword = function(candidatePwd) {
  //comparing the plain version to teh encrypted version of the password
  return bcrypt.compare(candidatePwd, this.password);
}

User.prototype.generateToken = function() {
  return jwt.sign({id: this.id}, process.env.JWT)
}

//class methods (same thing as static methods)

User.authenticate = async function({username, password }){
  const user = await this.findOne({where: {username}})
  if (!user || !(await user.correctPassword(password))) {
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
}

User.findbyToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if(!user) {
      throw 'bad credentials'
    }
    return user;
  } catch(ex){
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }
}
