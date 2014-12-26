import Ember from 'ember';
import NavRouteMixin from 'client/mixins/nav-route';

module('NavRouteMixin');

// Replace this with your real tests.
test('it works', function() {
  var NavRouteObject = Ember.Object.extend(NavRouteMixin);
  var subject = NavRouteObject.create();
  ok(subject);
});
