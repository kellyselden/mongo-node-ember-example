import DS from 'ember-data';
import ENV from 'client/config/environment';

export default DS.RESTAdapter.extend({
  namespace: ENV.APP.api
});
