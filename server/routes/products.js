var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/app');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Product = new mongoose.Schema({
  name: { type: String, required: true }
});
var ProductModel = mongoose.model('Product', Product);  

router.get('/', function (req, res) {
  return ProductModel.find(function (err, products) {
    if (err) return console.error(err);
    return res.send({
      products: products
    });
    console.log(products);
  });
});

router.post('/', function (req, res){
  var product;
  console.log("POST: ");
  console.log(req.body);
  product = new ProductModel({
    name: req.body.product.name
  });
  product.save(function (err) {
    if (!err) {
      return console.log("created");
    } else {
      return console.log(err);
    }
  });
  return res.send(product);
});

router.get('/:id', function (req, res){
  return ProductModel.findById(req.params.id, function (err, product) {
    if (!err) {
      return res.send({
        product: product
      });
    } else {
      return console.log(err);
    }
  });
});

router.put('/:id', function (req, res){
  return ProductModel.findById(req.params.id, function (err, product) {
    product.title = req.body.title;
    product.description = req.body.description;
    product.style = req.body.style;
    return product.save(function (err) {
      if (!err) {
        console.log("updated");
      } else {
        console.log(err);
      }
      return res.send(product);
    });
  });
});

router.delete('/:id', function (req, res){
  return ProductModel.findById(req.params.id, function (err, product) {
    return product.remove(function (err) {
      if (!err) {
        console.log("removed");
        return res.send('');
      } else {
        console.log(err);
      }
    });
  });
});

module.exports = router;
