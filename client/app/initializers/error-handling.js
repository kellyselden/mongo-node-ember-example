import Ember from 'ember';

export function initialize(container, application) {
  Ember.onerror = function(error) {
    application.set('error', error);
    container.lookup('route:application').transitionTo('error');
  };
}

export default {
  name: 'error-handling',
  initialize: initialize
};
