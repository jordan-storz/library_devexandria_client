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
    const socket = this.get('eventSocket').get('socketRef');
    socket.on('message', function(msg) {
      let parsedData = JSON.parse(JSON.parse(msg.data));
      let eventId = Number(parsedData["eventId"]);
      console.log('eventId');
      console.log(eventId);
      let event = this.store.peekRecord('event', eventId);
      console.log('found event in local storage');
      console.log(event);
      if (event) {
        this.store.unloadRecord(event);
      }
      this.refresh();
    }, this)
  }
});
