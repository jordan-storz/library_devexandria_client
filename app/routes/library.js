import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      library: this.store.findRecord('library', params.library_id),
      gitUser: this.store.findRecord('github-user', '#')
    });
  },

  afterModel(model) {
    let username = model.library.get('user').get('username');
    let gitLogin = model.gitUser.get('login');
    // if (username === gitLogin) {
    //   this.transitionTo('user', username);
    // }
  }
});
