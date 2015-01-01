import EditController from 'client/controllers/edit';

var types = ['first', 'second'];

export default EditController.extend({
  returnRoute: 'products',

  types: function() {
    return types.map(function(type) {
      return { value: type, label: this.t('product.types.' + type) };
    }.bind(this));
  }.property('i18n.locale')
});
