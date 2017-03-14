import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  beforeModel() {
    let githubUser = this.store.peekRecord('github-user', '#');
    if (!githubUser) {
      this.transitionTo('index');
    }
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
