var conn = new Mongo();
var db = conn.getDB('store');
for (var i = 1; i <= 10; i++) {
  db.clients.insert({ name: 'Client' + i });
}