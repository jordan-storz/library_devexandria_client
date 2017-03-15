import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  // library: DS.belongsTo('library'),
  followers: DS.hasMany('user', {inverse: 'followees'}),
  followees: DS.hasMany('user', {inverse: 'followers'})
});
