export function initialize(container, application) {
  var socket = container.lookup('io:main');

  socket.on('version', function(msg) {
    var isNewVersion = msg !== application.version;
    if (isNewVersion && confirm('App updated. Reload?')) {
      window.location.reload();
    }
  });
}

export default {
  name: 'version',
  after: 'socket-io',
  initialize: initialize
};
