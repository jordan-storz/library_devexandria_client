import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    let paramsUsername = transition.params.user.username;
    this.store.findRecord('github-user', '#')
      .then(githubUser => {
        let githubUserName = githubUser.get('login');
        if (paramsUsername !== githubUserName) {
          this.transitionTo('user', githubUserName);
        }
      });
  },
  model(params) {
    return Ember.RSVP.hash({
      gitUser: this.store.findRecord('github-user', '#'),
      currentUser: this.store.queryRecord('user', {username: params.username})
    });
  }
});
