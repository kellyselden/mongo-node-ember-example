import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    github: function() {
      this.get('session').open('github-oauth2').then(function() {
        console.log(arguments);
      }, function() {
        console.log(arguments);
      });
    },
    facebook: function() {
      this.get('session').open('facebook-oauth2').then(function() {
        console.log('success');
        console.log(arguments);
      }, function() {
        console.log('fail');
        console.log(arguments);
      });
    }
  }
});
