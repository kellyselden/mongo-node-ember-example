import Ember from 'ember';

var locales = ['en-us', 'es-es'];
var ignoreSelectedLocaleChanged;

export default Ember.Component.extend({
  localeSetup: function() {
    var application = this.container.lookup('application:main');
    var currentLocale = application.get('locale');
    this.set('locales', locales.map(function(locale) {
      var option = { value: locale, label: this.t('locales.' + locale) };
      if (locale === currentLocale) {
        ignoreSelectedLocaleChanged = true;
        this.set('selectedLocale', option);
      }
      return option;
    }.bind(this)));
  }.on('init'),
  selectedLocaleChanged: function() {
    if (ignoreSelectedLocaleChanged) {
      ignoreSelectedLocaleChanged = false;
      return;
    }
    this.sendAction('action', this.get('selectedLocale').value);
  }.observes('selectedLocale')
});
