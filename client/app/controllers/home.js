import Ember from 'ember';
import ENV from 'client/config/environment';

export default Ember.Controller.extend({
  branch: ENV.APP.branch,
  version: ENV.APP.version,
  timestamp: moment(new Date(ENV.APP.timestamp)).format('llll')
});
