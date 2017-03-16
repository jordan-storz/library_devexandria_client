import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'article',
  classNames: ['single-event-component'],
  classBindings: ['isAdd', 'isRemove'],
  isAdd: Ember.computed('event.eventType', function() {
    return this.get('event.eventType') === 'add';
  }),
  isRemove: Ember.computed('eventType', function() {
    return this.get('event.eventType') === 'remove';
  }),
  eventMessage: Ember.computed('event.eventType', 'event.user.username', function() {
    let eventType = this.get('event.eventType');
    let username = this.get('event.user.username');
    let adjective = eventType + 'ed';
    let proposition = eventType == 'add' ? 'to' : 'from';
    return `${username} ${adjective} a bookmark ${proposition} their library.`
  })
});
