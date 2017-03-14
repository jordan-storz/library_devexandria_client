import Ember from 'ember';

export default Ember.Component.extend({
  content: '',
  creating: false,

  actions: {
    submitContent() {
      let content = this.get('content');
      this.get('updateContent')(content);
    },
    startCreating() {
      this.set('creating', true)
    }
  }
});
