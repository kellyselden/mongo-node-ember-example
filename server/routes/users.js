var express = require('express');
var User = require('../models/user');

var router = express.Router();

function deleteVersion(product) {
  product = product.toObject();
  delete product.__v;
  return product;
}

router.get('/', function(req, res) {
  return User.find(function(err, users) {
    if (err) return console.error(err);
    return res.send({
      users: users.map(deleteVersion)
    });
  });
});

module.exports = router;
