import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  store: Ember.inject.service(),
  fetch(data) {
    return data;
  }
});
