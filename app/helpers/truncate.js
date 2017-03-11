import Ember from 'ember';

export function truncate(params, hash) {
  let value = params[0];
  let len = hash.limit;
  let out = '';

  if (value !== undefined) {
    out = value.substr(0, len);
    if (value.length > len) {
      out += '...';
    }
  } else {
    out = '';
  }
  return out;
}

export default Ember.Helper.helper(truncate);
