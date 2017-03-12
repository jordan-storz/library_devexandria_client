import DS from 'ember-data';
import Ember from 'ember';
import ENV from '../config/environment';

const { String : { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({

  host: ENV.APP.HOST,

  pathForType(type) {
    return pluralize(underscore(type));
  }

});
