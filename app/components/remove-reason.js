import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'div',
  classNames: ['remove-reason-component'],
  reasonBody: '',

  actions: {
    submitRemove() {
      let reasonBody = this.get('reasonBody');
      this.get('removeBook')(reasonBody);
    }
  }
});
