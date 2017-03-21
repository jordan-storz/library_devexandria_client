import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'reason-display-component',

  showReason: false,

  mouseEnter() {
    this.set('showReason', true);
  },

  mouseLeave() {
    this.set('showReason', false);
  },

});
