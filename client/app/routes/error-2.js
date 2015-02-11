import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    var application = this.container.lookup('application:main');
    controller.set('error', application.get('error'));
    application.set('error', undefined);
  }
});
