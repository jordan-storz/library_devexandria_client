import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'li',
  classNames: ['single-tag-component'],
  classNameBindings: ['largeTag', 'fadedTag'],
  showX: false,
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
      this.get('deleteTag')(tag);
    }
  }
});
