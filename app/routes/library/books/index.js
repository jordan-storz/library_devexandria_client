import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('books index');
    console.log(this.modelFor('library'));
    return Ember.RSVP.hash({
      books: this.modelFor('library.books').books
    })
  }
});
