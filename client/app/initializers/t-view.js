export function initialize(container, application) {
  application.inject('view', 't', 'utils:t');
}

export default {
  name: 't-view',
  after: 't',
  initialize: initialize
};
