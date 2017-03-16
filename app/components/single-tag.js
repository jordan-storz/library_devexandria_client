import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'li',
  classNames: ['single-tag-component'],
  classNameBindings: ['largeTag', 'fadedTag', 'shouldHide'],
  showX: false,
  shouldHide: Ember.computed('library', 'tag.libraries', function() {
    let tag = this.get('tag');
    let library = this.get('library');
    return !tag.get('libraries').includes(library);
  }),
  mouseEnter() {
    if (this.get('deletable')) {
      this.set('showX', true);
    }
  },
  mouseLeave() {
    this.set('showX', false);
  },
  actions: {
    triggerDelete() {
      let tag = this.get('tag');
      this.set('shouldHide', true);
      this.get('deleteTag')(tag);
    }
  }
});
