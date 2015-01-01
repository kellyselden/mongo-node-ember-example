import Ember from 'ember';

var locales = ['en-us', 'es-es'];
var ignoreSelectedLocaleChanged;

export default Ember.Component.extend({
  localeSetup: function() {
    var currentLocale = this.get('i18n.locale');
    this.set('locales', locales.map(function(locale) {
      var option = { value: locale, label: this.t('locales.' + locale) };
      if (locale === currentLocale) {
        ignoreSelectedLocaleChanged = true;
        this.set('selectedLocale', option);
      }
      return option;
    }.bind(this)));
  }.observes('i18n.locale').on('init'),
  selectedLocaleChanged: function() {
    if (ignoreSelectedLocaleChanged) {
      ignoreSelectedLocaleChanged = false;
      return;
    }
    this.sendAction('action', this.get('selectedLocale').value);
  }.observes('selectedLocale')
});
