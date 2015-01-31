import Ember from 'ember';

export default Ember.Component.extend({
  menuRouteChanged: function() {
    var menuRoute = this.get('menuRoute');
    if (!menuRoute) {
      return;
    }
    var i = menuRoute.indexOf('.');
    if (i > 0) {
      menuRoute = menuRoute.substr(0, i);
    }
    this.set('homeClass', '');
    this.set('productsClass', '');
    switch(menuRoute) {
      case 'home':
        this.set('homeClass', 'active');
        break;
      case 'products':
        this.set('productsClass', 'active');
        break;
    }
  }.observes('menuRoute').on('init'),

  actions: {
    changeLocale: function(locale) {
      this.sendAction('action', locale);
    }
  }
});
