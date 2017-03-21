import Ember from 'ember';

export default Ember.Route.extend({

  eventSocket: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      book: this.modelFor('user.library.book').book,
      library: this.modelFor('user.library')
    });
  },

  afterModel() {
    let book = this.modelFor('user.library.book').book;
  },

  getBookAndLib() {
    let book = this.modelFor('user.library.book').book;
    let library = this.modelFor('user.library');
    return {book, library};
  },

  actions: {
    saveTag(name) {
      let book = this.modelFor('user.library.book').book;
      let library = this.modelFor('user.library');
      this.store.queryRecord('tag', {name}).then(tag => {
        tag.get('books').pushObject(book);
        tag.get('libraries').pushObject(library);
        tag.save();
      });
    },

    deleteTag(tag) {
      let {book, library} = this.getBookAndLib();
      tag.get('libraries').removeObject(library);
      tag.save();
    },

    updateContent(content) {
      let book = this.currentModel.book;
      book.set('content', content);
      book.save().then(result => {
        //
      });
    },

    removeBook(reason) {
      let {book, library} = this.getBookAndLib();
      book.get('libraries').removeObject(library);
      book.save().then(result => {
        this.store.queryRecord('event', {
          user_id: library.get('user.id'),
          book_id: book.id,
          library_id: library.id,
          event_type: 'add'})
          .then(event => {
            event.set('eventType', 'remove');
            event.set('removeReason', reason);
            event.save().then((result) => {
              let eventId = event.id;
              console.log('event saved:');
              console.log(result.get('eventType'));
              let eventMessage = JSON.stringify({eventId});
              this.get('eventSocket').sendEventMessage(eventMessage);
              this.transitionTo('user.library.books.index');
            });
          });
      });

    }
  }
});
