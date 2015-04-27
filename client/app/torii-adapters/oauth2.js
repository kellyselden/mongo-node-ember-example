import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
  open: function(authorization) {
    var provider = this.get('provider');
    var data = { };
    data[provider + '-auth-code'] = authorization.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: ENV.APP.api + '/auth/' + provider,
        type: 'POST',
        data: data,
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    });
  },
  fetch: function() {
    console.log('fetch');
    this._super.apply(this, arguments);
  },
  close: function() {
    console.log('close');
    this._super.apply(this, arguments);
  }
});
