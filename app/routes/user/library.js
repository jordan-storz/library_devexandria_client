import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    console.log('library current user');
    console.log(currentUser.get('username'));
    // return currentUser.get('library');
    return this.store.queryRecord('library', {user_id: currentUser.get('id')})
  }
});
