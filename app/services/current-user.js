import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service('store'),

  loadUser(user) {
    this.set('user', user);
  },

  getUser() {
    return this.get('user');
  }

});
