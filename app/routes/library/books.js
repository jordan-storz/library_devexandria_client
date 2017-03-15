import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      books: this.modelFor('library').library.get('books')
    });
  }
});
