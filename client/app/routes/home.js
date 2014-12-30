import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.container.lookup('application:main').set('locale', params.locale);
  },
  actions: {
    localeChanged: function(locale) {
      var routes = this.router.router.currentHandlerInfos;
      var models = [];
      for (var i = 0; i < routes.length; i++) {
        var params = routes[i].params;
        for (var param in params) {
          if (params.hasOwnProperty(param)) {
            models.push(param === 'locale' ? locale : params[param]);
          }
        }
      }

      var args = models.slice();
      var currentRouteName = this.controllerFor('application').get('currentRouteName');
      args.unshift(currentRouteName);
      this.transitionTo.apply(this, args);
    }
  }
});
