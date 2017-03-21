import Ember from 'ember';

export default Ember.Controller.extend({
  showDeleteReason: false,


  actions: {
    toggleReasonOn() {
      console.log('toggling reason property');
      this.set('showDeleteReason', true);
    },
    toggleReasonOff() {
      this.set('showDeleteReason', false);
    },
  }
});
