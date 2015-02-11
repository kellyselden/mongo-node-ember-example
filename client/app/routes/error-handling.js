import Ember from 'ember';
import NavRouteMixin from 'client/mixins/nav-route';

export default Ember.Route.extend(NavRouteMixin, {
  actions: {
    throwError: function() {
      this.will.throwError();
    }
  }
});
