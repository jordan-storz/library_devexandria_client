import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'article',
  classNames: ['single-bookmark-component'],
  showingMenu: false,
  mouseEnter() {
    this.set('showingMenu', true);
  },
  mouseLeave() {
    this.set('showingMenu', false);
  }
});
