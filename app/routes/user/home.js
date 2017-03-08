import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(params) {
    console.log('PARAMS:');
    console.log(params);
    return Ember.RSVP.hash({
      user: this.get('store').queryRecord('user', {username: params.username})
    })
  }

});
