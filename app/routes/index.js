import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.get('store').findRecord('github-user', '#')
      .then(githubUser => {
        console.log('TRANSITIONING TO ROUTE');
        console.log(githubUser);
        this.transitionTo('user.home', githubUser.get('login'));
      });
  }
});
