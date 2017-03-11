import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel(params) {
    return this.get('store').findRecord('github-user', '#')
      .then(githubUser => {
        this.transitionTo('user.library.books', githubUser.get('login'));
      });
  }
});
