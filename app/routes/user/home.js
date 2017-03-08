import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    console.log('PARAMS:');
    console.log(params);
    return Ember.RSVP.hash({
      user: this.get('store').queryRecord('user', {username: params.username})
    })
  }

});
