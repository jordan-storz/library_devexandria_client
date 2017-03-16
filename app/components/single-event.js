import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagname: 'article',
  classNames: ['single-event-component'],
  classBindings: ['isAdd', 'isRemove'],
  isAdd: Ember.computed('event.eventType', function() {
    return this.get('event.eventType') === 'add';
  }),
  isRemove: Ember.computed('eventType', function() {
    return this.get('event.eventType') === 'remove';
  }),
  userLibrary: Ember.computed('event.user.id', function() {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let userId = self.get('event.user.id');
      self.get('store').queryRecord('library', {user_id: userId})
        .then(library => {
          self.set('userLibrary', library)
        });
    });
  }),
  eventMessage: Ember.computed('event.eventType', 'event.user.username', function() {
    let eventType = this.get('event.eventType');
    let username = this.get('event.user.username');
    let adjective = eventType + 'ed';
    let proposition = eventType == 'add' ? 'to' : 'from';
    return `${username} ${adjective} a bookmark ${proposition} their library.`
  })
});
