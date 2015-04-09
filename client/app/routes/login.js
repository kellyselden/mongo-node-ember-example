import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    github: function() {
      this.get('session').open('github-oauth2').then(function() {
        
      }.bind(this));
    }
  }
});
