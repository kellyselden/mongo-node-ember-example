var conn = new Mongo();
var db = conn.getDB('test');
for (var i = 1; i <= 10; i++) {
  db.products.insert({ name: 'Product ' + i });
}