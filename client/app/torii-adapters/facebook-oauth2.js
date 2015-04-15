import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
  open: function(authentication) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.host + '/auth/facebook',
        data: { 'facebook-auth-code': authentication.authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
