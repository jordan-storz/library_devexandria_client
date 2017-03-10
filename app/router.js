import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('libraries');
  this.route('books');
  this.route('tags');
  this.route('login');

  this.route('user', {path: 'user/:username'}, function() {
  });
});

export default Router;
