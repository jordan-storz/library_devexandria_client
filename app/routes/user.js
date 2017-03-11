import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.store.queryRecord('user', {username: params.username})
    });
  }
});
