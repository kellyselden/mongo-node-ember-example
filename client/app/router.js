import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  adminRouter(this);
  this.route('auth', { path: 'auth/:provider/callback' });
  this.resource('home', { path: ':locale' }, function() {
    this.resource('login');
    this.resource('products', function() {
      this.route('create');
      this.resource('products.product', { path: ':product_id' });
    });
    this.resource('catchall', { path: '/*wildcard' });
  });
});
