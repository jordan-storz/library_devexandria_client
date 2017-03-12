import GitHubUserAdapter from 'ember-data-github/adapters/github-user';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default GitHubUserAdapter.extend(DataAdapterMixin, {
  init() {
    this._super(...arguments);
  },
  authorizer: 'authorizer:github',
  // buildURL(model) {
  //   console.log('BUILD URL');
  //   console.log(model);
  // }
});
