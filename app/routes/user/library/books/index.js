import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.modelFor('user').currentUser;
    return Ember.RSVP.hash({
      currentUser,
      library: currentUser.get('library'),
      books: currentUser.get('library').get('books')
    });
  },
  showBookDetails: true,
  actions: {
    toggleShowBookDetails() {
      this.set('showBookDetails', true);
    },
    toggleHideBookDetails() {
      this.set('showBookDetails', false);
    }
  }
});
