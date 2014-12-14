import Ember from 'ember';

export default Ember.Route.extend({
  model: function(type, hash) {
    return Ember.RSVP.hash(hash || {}).then(function(hash) {
      return this.store.createRecord(type, hash);
    }.bind(this));
  },
  deactivate: function() {
    var model = this.currentModel;
    if (model.get('isDirty') && !model.get('isSaving')) {
      this.store.unloadRecord(model);
    }
  }
});
