import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('PARAMS');
    console.log(params);
    return Ember.RSVP.hash({
      currentUser: this.store.queryRecord('user', {username: params.username})
    });
  }
});
