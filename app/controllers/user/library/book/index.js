import Ember from 'ember';

export default Ember.Controller.extend({
  showDeleteReason: true,


  actions: {
    toggleReasonOn() {
      console.log('toggling reason property');
      this.set('showDeletReason', true);
    },
    toggleReasonOff() {
      this.set('showDeletReason', false);
    },
  }
});
