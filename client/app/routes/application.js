import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    changeMenu: function(routeName) {
      this.controller.set('menuRoute', routeName);
    }
  }
});
