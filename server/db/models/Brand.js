const Sequelize = require('sequelize');
const db = require('../db');

const Brand = db.define('brand', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  funFact: {
    type: Sequelize.STRING,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isUrl: true
    }
  },
})

module.exports = Brand;
