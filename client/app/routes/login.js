import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    github: function() {
      this.get('session').open('github-oauth2').then(function() {
        console.log(arguments);
      }.bind(this), function(error) {
        this.controller.set('error', 'Could not sign you in: ' + error.message);
      }.bind(this));
    }
  }
});
