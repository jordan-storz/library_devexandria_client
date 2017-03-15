import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  model() {
    let username = this.get('session.data.authenticated.username');
    this.store.queryRecord('user', {username})
      .then(user => {
        this.get('currentUser').loadUser(user);
        this.transitionTo('user', user.get('username'));
      });
  }
});
