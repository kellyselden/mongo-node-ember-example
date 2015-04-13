import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
  open: function(authorization) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.host + '/' + ENV.APP.api + '/auth/github',
        // type: 'POST',
        data: { 'github-auth-code': authorization.authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }
});
