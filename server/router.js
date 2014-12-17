var express = require('express');
var router = express.Router();

var products = require('./routes/products');

router.use('/products', products);

module.exports = router;
