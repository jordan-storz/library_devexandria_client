import Ember from 'ember';

export default Ember.Component.extend({
  tagname: 'article',
  classNames: ['glance-library-component'],
  usernameExists: Ember.computed('library.user.username', function() {
    let username = this.get('library.user.username');
    return (!!username && username.length > 1);
  })
});
