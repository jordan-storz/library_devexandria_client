import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'form',
  classNames: ['tag-creator-component'],
  name: '',

  keyUp() {
    let name = this.get('name');
    if (name.includes(' ')) {
      this.set('name', name.trim());
    }
  },

  actions: {
    onEnter() {
      console.log('component action');
      let name = this.get('name');
      if (name) {
        return this.get('saveTag')(name);
      } else {
        return false;
      }
    },
    onClick() {
      console.log('CLICK!');
    }
  }
});
