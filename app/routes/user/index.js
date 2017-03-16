import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    let followeeIds = currentUser.get('followees').map(followee => {
      return followee.get('id');
    });
    
    return Ember.RSVP.hash({
      currentLibrary: this.store.queryRecord('library', {user_id: currentUser.get('id')}),
      currentUser: currentUser,
      events: this.store.query('event', {user_ids: followeeIds})
    });
  }
});
