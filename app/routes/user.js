import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(params) {
    this.store.findRecord('github-user', '#')
      .then(githubUser => {
        let githubUserName = githubUser.get('login');
        if (params.username !== githubUserName) {
          this.transitionTo('user', githubUserName);
        }
      });
  },
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.store.queryRecord('user', {username: params.username})
    });
  }
});
