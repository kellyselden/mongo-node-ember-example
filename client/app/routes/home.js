import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    this.container.lookup('application:main').set('locale', params.locale);
  },
  actions: {
    changeMenu: function(routeName) {
      this.controller.set('menuRoute', routeName);
    },
    localeChanged: function(locale) {
      var currentRouteName = this.controllerFor('application').get('currentRouteName');
      this.transitionToDynamic(currentRouteName, { home: { locale: locale } });
    }
  }
});
