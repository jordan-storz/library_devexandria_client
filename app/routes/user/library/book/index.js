import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('user.library.book');
  },

  actions: {
    saveTag(name) {
      console.log('Saving tag ...');
      let book = this.modelFor('user.library.book').book;
      let library = this.modelFor('user.library');
      this.store.queryRecord('tag', {name}).then(tag => {
        tag.get('books').pushObject(book);
        tag.get('libraries').pushObject(library);
        tag.save();
      });

      // tag.save();
    }
  }
});
