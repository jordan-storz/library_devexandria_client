import Ember from 'ember';

export default Ember.Controller.extend({

  currentUser: Ember.inject.service(),

  currentUserIs: Ember.computed('currentUser', function() {
    return this.get('currentUser').getUser();
  }),

  isSubscribed: Ember.computed('currentUserIs', 'user', function() {
    let followers = this.get('user').get('followers');
    return followers.includes(this.get('currentUserIs'));
  }),

  user: Ember.computed('model', function() {
    let {library} = this.get('model');
    let userId = library.get('user').get('id');
    return this.store.peekRecord('user', userId);
  }),

  followers: Ember.computed('user', function() {
    let followers = this.get('user').get('followers');
    return followers;
  }),


  library: Ember.computed('model', function() {
    let {gitUser, library, currentUser} = this.get('model');
    console.log('currentUser from controller');
    console.log(currentUser);
    let userId = library.get('user').get('id');
    let user = this.store.peekRecord('user', userId);


    return user;
    // let user = this.store.peekRecord('user', )
  }),

  actions: {
    logLibrary() {
      console.log(this.get('library'));
    }
  }



});
