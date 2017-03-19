import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  library: DS.belongsTo('library'),
  book: DS.belongsTo('book'),
  eventType: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});
