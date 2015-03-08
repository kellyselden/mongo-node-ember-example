import Ember from 'ember';

export default Ember.Controller.extend({
  // error.stack has some weird issues, this works only the first time
  stack: function() {
    return this.get('error').stack;
  }.property('error.stack')
});
