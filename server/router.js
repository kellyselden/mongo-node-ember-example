var express = require('express');
var router = express.Router();

var auth = require('./routes/auth');
var products = require('./routes/products');

router.use('/', auth);
router.use('/products', products);

module.exports = router;
