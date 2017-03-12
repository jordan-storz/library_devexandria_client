import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('user.library.book');
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
      console.log('DELETING TAG');
      console.log(tag);
      let {book, library} = this.getBookAndLib();
      tag.get('books').removeObject(book);
      tag.get('libraries').removeObject(library);
      tag.save();
    }
  }
});