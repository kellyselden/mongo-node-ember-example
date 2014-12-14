import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.transitionTo(this.get('returnRoute'));
    },
    save: function() {
      this.model.save();
      this.send('cancel');
    },
    remove: function() {
      this.model.destroyRecord();
      this.send('cancel');
    }
  }
});
