import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    return this.store.queryRecord('library', {user_id: currentUser.get('id')})
  }
});
