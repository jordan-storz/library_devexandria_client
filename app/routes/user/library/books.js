import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let gitHubUser = this.store.peekRecord('github-user', '#');
  }
});
