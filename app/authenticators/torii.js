import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
  ajax: Ember.inject.service(),

  authenticate() {
    return this._super(...arguments)
      .then(toriiData => {
        const authCode = toriiData.authorizationCode;
        const serverUrl = `/github_auth?code=${authCode}`;

        return this.get('ajax').request(serverUrl)
          .then(response => {
            console.log('RESPONSE WITH ACCESS TOKEN');
            console.log(response);
            return {
              access_token: response.token,
              provider: toriiData.provider
            }
          });
      });
  }
});
