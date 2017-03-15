import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    return Ember.RSVP.hash({
      currentUser,
      library: this.modelFor('user.library'),
      books: this.modelFor('user.library').get('books')
    });
  },
  actions: {
    toggleShowBookDetails() {
      this.set('showBookDetails', true);
    },
    toggleHideBookDetails() {
      this.set('showBookDetails', false);
    }
  }
});
