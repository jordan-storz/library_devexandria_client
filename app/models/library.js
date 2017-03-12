import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  books: DS.hasMany('book'),
  tags: DS.hasMany('tag')
});
