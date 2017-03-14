import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    console.log('USER INDEX ROUTE MODEL CURRENT USER:');
    console.log(currentUser);
    return Ember.RSVP.hash({
      currentLibrary: this.store.queryRecord('library', {user_id: currentUser.get('id')})
    });
  }
});
