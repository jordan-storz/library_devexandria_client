import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({

  // model() {
  //   return this.get('store').findRecord('github-user', '#')
  // },

  init() {
    // const gitHubUser = this.store.peekRecord('github-user', '#');
    // this.store.query('user', {username: gitHubUser.login})
    //   .then(user => this.transitionTo('user.show', user));
  }


});
