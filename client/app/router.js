import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', { path: ':locale' }, function() {
    this.resource('products', function() {
      this.route('create');
      this.resource('products.product', { path: ':product_id' });
    });
  });
});

export default Router;
