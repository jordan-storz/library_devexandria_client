import Ember from 'ember';

export default Ember.Route.extend({
  eventSocket: Ember.inject.service(),
  store: Ember.inject.service(),

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
  },

  afterModel(model) {
    console.log('after model');
    console.log(this);
    const socket = this.get('eventSocket').get('socketRef');
    socket.on('message', function(msg) {
      let parsedData = JSON.parse(JSON.parse(msg.data));
      console.log(typeof parsedData);
      let eventId = Number(parsedData["eventId"]);
      this.get('store').findRecord('event', eventId)
        .then(event => {
          this.refresh();
        });
    }, this)
  }
});
