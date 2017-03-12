import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
  },
  model(params) {
    return Ember.RSVP.hash({
      book: this.store.findRecord('book', params.book_id)
    });
  }
});
