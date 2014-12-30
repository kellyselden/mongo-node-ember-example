var express = require('express');
var Product = require('../models/product');

var router = express.Router();

router.get('/', function(req, res) {
  return Product.find(function(err, products) {
    if (err) return console.error(err);
    return res.send({
      products: products
    });
  });
});

router.post('/', function(req, res) {
  var product = new Product({
    name: req.body.product.name,
    type: req.body.product.type,
    isPublic: req.body.product.isPublic
  });
  return product.save(function(err) {
    if (err) return console.error(err);
    return res.send({
      product: product
    });
  });
});

router.get('/:id', function(req, res) {
  return Product.findById(req.params.id, function(err, product) {
    if (err) return console.error(err);
    return res.send({
      product: product
    });
  });
});

router.put('/:id', function(req, res) {
  return Product.findById(req.params.id, function(err, product) {
    if (product) {
      product.name = req.body.product.name;
      product.type = req.body.product.type;
      product.isPublic = req.body.product.isPublic;
      return product.save(function(err) {
        if (err) return console.error(err);
        return res.send({
          product: product
        });
      });
    }
  });
});

router.delete('/:id', function(req, res) {
  return Product.findById(req.params.id, function(err, product) {
    if (product) {
      return product.remove(function(err) {
        if (err) return console.error(err);
        return res.send({});
      });
    }
  });
});

module.exports = router;
