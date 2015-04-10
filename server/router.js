var express = require('express');
var router = express.Router();

var products = require('./routes/products');

router.use('/products', products);

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

module.exports = router;
