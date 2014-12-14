var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1', function(req, res) {
  mongoose.connect('mongodb://localhost/test');
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    // yay!
  });
  res.send('Hello World!');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
