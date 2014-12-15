var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var fs = require('fs');

var connectionstring = fs.readFileSync('connectionstring', 'utf8');

mongoose.connect(connectionstring);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true }
});
var ProductModel = mongoose.model('Product', ProductSchema);  

router.get('/', function(req, res) {
  return ProductModel.find(function(err, products) {
    if (err) return console.error(err);
    return res.send({
      products: products
    });
  });
});

router.post('/', function(req, res) {
  var product = new ProductModel({
    name: req.body.product.name
  });
  return product.save(function(err) {
    if (err) console.error(err);
    return res.send({
      product: product
    });
  });
});

router.get('/:id', function(req, res) {
  return ProductModel.findById(req.params.id, function(err, product) {
    if (err) return console.error(err);
    return res.send({
      product: product
    });
  });
});

router.put('/:id', function(req, res) {
  return ProductModel.findById(req.params.id, function(err, product) {
    product.name = req.body.product.name;
    return product.save(function(err) {
      if (err) console.error(err);
      return res.send({
        product: product
      });
    });
  });
});

router.delete('/:id', function(req, res) {
  return ProductModel.findById(req.params.id, function(err, product) {
    return product.remove(function(err) {
      if (err) console.error(err);
      return res.send('');
    });
  });
});

module.exports = router;
