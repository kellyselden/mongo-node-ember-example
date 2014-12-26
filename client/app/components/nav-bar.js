import Ember from 'ember';

export default Ember.Component.extend({
  menuRouteChanged: function() {
    this.set('homeClass', '');
    this.set('productsClass', '');
    switch(this.get('menuRoute')) {
      case 'index':
        this.set('homeClass', 'active');
        break;
      case 'products':
        this.set('productsClass', 'active');
        break;
    }
  }.observes('menuRoute').on('init')
});
