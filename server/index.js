var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1', function(req, res) {
  res.send('Hello World!');
});

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
