import Ember from 'ember';

export default Ember.Controller.extend({
  products: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: this.model,
      sortProperties: ['name']
    });
  }.property('model')
});
