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
    if (username === gitLogin) {
      this.transitionTo('user', username);
    } else {
      this.store.queryRecord('user', {username: model.gitUser.get('login')})
        .then(user => {
          console.log('found user post model');
          console.log(user.get('username'));
          this.currentModel.currentUser = user;
          console.log('current model post model');
          console.log(this.currentModel);
        })
    }
  },

  actions: {
    subscribeUser() {
      console.log('subscribing to user');
      let userId = this.currentModel.library.get('user').get('id');
      let user = this.store.peekRecord('user', userId);
      let gitUser = this.currentModel.gitUser;
      this.store.queryRecord('user', {username: gitUser.get('login')})
        .then(currentUser => {
          user.get('followers').pushObject(currentUser);
          user.save()
        });
    }
  }
});
