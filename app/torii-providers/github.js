import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
   return data;
  },
  open() {
    return this._super()
      .then(toriiData => {
        const authCode = toriiData.authorizationCode;
        const serverUrl = `/github_auth?code=${authCode}`;

        return this.get('ajax').request(serverUrl)
          .then(data => {
            toriiData.accessToken = data.token;
            console.log('received data back');
            console.log(data);
            return toriiData;
          });
      });
  }  
});
