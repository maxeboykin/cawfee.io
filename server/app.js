const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

//body parsing middleware
app.use(express.json());

//auth and api routes
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '--', 'public/index.html')));

app.use(express.static(path.join(__dirname, '--', 'public')));

//any remaining requests with an extension (.js, .css, etc) send 404

app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next()
  }
})


// since we want a single page application, our server should send its index.html for any requests that dont match oen of our API routes
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '--', 'public/index.html'));
})

//error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internet server errror');
});

module.exports = app;
