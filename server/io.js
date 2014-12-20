var socket = require('socket.io');

module.exports = function(http) {
  var io = socket(http);

  io.on('connection', function(socket) {
    socket.on('save', function(msg) {
      socket.broadcast.emit('save', msg);
    });
    socket.on('remove', function(msg) {
      socket.broadcast.emit('remove', msg);
    });
  });
};
