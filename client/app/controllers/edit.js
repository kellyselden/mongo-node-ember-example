import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      
    },
    save: function() {
      this.model.save();
    },
    remove: function() {
      this.model.destroyRecord();
    }
  }
});
