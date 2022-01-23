const Sequelize = require('sequelize');
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const axios = require('axios');
const Order = require('./Order');

