var mongoose = require('mongoose');

module.exports = mongoose.model('Product', new mongoose.Schema({
  name: { type: String, required: true }
}));
