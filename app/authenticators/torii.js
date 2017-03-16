import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import ENV from '../config/environment';

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
  ajax: Ember.inject.service(),

  authenticate() {
    return this._super(...arguments)
      .then(toriiData => {
        const authCode = toriiData.authorizationCode;
        const serverUrl = ENV.APP.HOST + `/github_auth?code=${authCode}`;
        // const serverUrl = `/github_auth?code=${authCode}`;

        return this.get('ajax').request(serverUrl)
          .then(response => {
            return {
              username: response.username,
              access_token: response.token,
              provider: toriiData.provider
            }
          });
      });
  }
});
