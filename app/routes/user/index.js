import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    return Ember.RSVP.hash({
      currentLibrary: this.store.queryRecord('library', {user_id: currentUser.get('id')}),
      currentUser: currentUser
    });
  }
});
