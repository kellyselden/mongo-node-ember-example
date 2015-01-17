import Ember from 'ember';

var locales = ['en-us', 'es-es'];

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['dropdown'],

  locales: locales.map(function(locale) {
    return { value: locale, key: 'locales.' + locale };
  }),

  actions: {
    changeLocale: function(locale) {
      this.sendAction('action', locale);
    }
  }
});
