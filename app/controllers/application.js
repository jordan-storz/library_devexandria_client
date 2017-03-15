import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  config: config.torii.providers['github-oauth2'],

  sessionUsername: Ember.computed('session', function() {
    return this.get('session.data.authenticated.username')
  }),

  sessionUserNameChanged: Ember.observer('session', function() {
    console.log('USERNAME CHANGED!!!!');
    console.log(this.get('sessionUsername'));
  }),

});
