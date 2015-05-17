var io = window.io;

export function initialize(container, application) {
  var store = container.lookup('store:main');

  var socket = io();

  socket.on('save', function(msg) {
    store.fetch(msg.type, msg.id);
  });
  socket.on('remove', function(msg) {
    if (store.hasRecordForId(msg.type, msg.id)) {
      store.getById(msg.type, msg.id).deleteRecord();
    }
  });

  application.register('io:main', socket, { instantiate: false });
  application.inject('controller', 'io', 'io:main');
}

export default {
  name: 'socket-io',
  after: 'store',
  initialize: initialize
};
