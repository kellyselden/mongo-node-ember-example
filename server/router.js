var express = require('express');
var router = express.Router();

// var passport = require('./passport');
// var auth = require('./routes/auth');
var products = require('./routes/products');

// passport(router);
// router.use('/', auth);
router.use('/products', products);

module.exports = router;
