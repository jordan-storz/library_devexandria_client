import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  book: DS.belongsTo('book'),
  eventType: DS.attr('string'),
  createdAt: DS.attr('date')
});
