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
    this.route('library', function() {
      this.route('books', function() {
        this.route('add', function() {
          this.route('creating');
        });
      });
      this.route('book', {path: '/book/:book_id'}, function() {
      });
    });
  });
  this.route('library', {path: 'library/:library_id'}, function() {
    this.route('books', function() {});
    this.route('book', {path: '/book/:book_id'});
  });
});

export default Router;
