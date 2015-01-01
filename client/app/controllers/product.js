import Ember from 'ember';
import EditController from 'client/controllers/edit';

var types = ['first', 'second'];

export default EditController.extend({
  returnRoute: 'products',

  types: function() {
    return types.map(function(type) {
      return { value: type };
    });
  }.property(),
  localeChanged: function() {
    this.get('types').forEach(function(option) {
      Ember.set(option, 'label', this.t('product.types.' + option.value));
    }.bind(this));
  }.observes('i18n.locale').on('init')
});
