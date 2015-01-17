import Ember from 'ember';
import LocaleRouteMixin from 'ember-cli-i18n-route/mixins/locale-route';

export default Ember.Route.extend(LocaleRouteMixin, {
  actions: {
    changeMenu: function(routeName) {
      this.controller.set('menuRoute', routeName);
    }
  }
});
