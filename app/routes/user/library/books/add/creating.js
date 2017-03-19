import Ember from 'ember';

export default Ember.Route.extend({
  eventSocket: Ember.inject.service(),

  beforeModel(transition) {
    let library = this.modelFor('user.library');
    let sourceUrl = this.modelFor('user.library.books.add').sourceUrl;
    if (!sourceUrl) {
      this.transitionTo('user.library.books.add.index');
    } else {
      this.store.queryRecord('book', {source_url: sourceUrl}).then(book => {
        book.get('libraries').pushObject(library);
        book.save().then(result => {
          let event = this.store.createRecord('event', {
            user: library.get('user'),
            library: library,
            book: book,
            eventType: 'add'
          });
          event.save().then((result) => {
            console.log('result of save event');
            let eventId = result.get('id');
            let eventMessage = JSON.stringify({eventId});
            this.get('eventSocket').sendEventMessage(eventMessage);
            this.transitionTo('user.library.book', book.id);
          });
        });
      })
    }
  }
});
