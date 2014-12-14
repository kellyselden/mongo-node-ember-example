import DS from 'ember-data';
import ENV from 'client/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.host,
  namespace: ENV.APP.api
});
