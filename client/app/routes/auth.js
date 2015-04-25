import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  test: function() {
    new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.host + '/auth/facebook/callback' + window.location.search,
        // data: { code: $.deparam.querystring().code },
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  }.on('activate')
});
