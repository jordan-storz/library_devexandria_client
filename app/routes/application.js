import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  currentUser: Ember.inject.service('current-user'),

  model() {
    let token = this.get('session.data.authenticated.access_token');
    let username = this.get('session.data.authenticated.username');
    if (token && username) {
      console.log('FETCHING USER');
      console.log(username);
      this.store.queryRecord('user', {username})
        .then(user => {
          this.get('currentUser').loadUser(user);
        });
    }
  },

  actions: {
    logout() {
      this.get('session').invalidate();
    },

    login() {
      this.get('session').authenticate('authenticator:torii', 'github');
    }
  }
});
