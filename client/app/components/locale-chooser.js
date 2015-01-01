import Ember from 'ember';

var locales = ['en-us', 'es-es'];
var ignoreSelectedLocaleChanged;

export default Ember.Component.extend({
  locales: function() {
    var currentLocale = this.container.lookup('application:main').get('locale');
    return locales.map(function(locale) {
      var option = { value: locale, label: this.t('locales.' + locale) };
      if (locale === currentLocale) {
        ignoreSelectedLocaleChanged = true;
        this.set('selectedLocale', option);
      }
      return option;
    }.bind(this));
  }.property('i18n.locale'),
  selectedLocaleChanged: function() {
    if (ignoreSelectedLocaleChanged) {
      ignoreSelectedLocaleChanged = false;
      return;
    }
    this.sendAction('action', this.get('selectedLocale').value);
  }.observes('selectedLocale')
});
