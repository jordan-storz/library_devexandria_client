import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  sourceUrl: DS.attr('string'),
  libraries: DS.hasMany('library'),
  tags: DS.hasMany('tag')
});
