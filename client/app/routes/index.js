import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('home', this.container.lookup('application:main').defaultLocale);
  }
});
