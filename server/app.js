var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var products = require('./routes/products');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/v1/products', products);

module.exports = app;
