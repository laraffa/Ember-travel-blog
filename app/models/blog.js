import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  article: DS.attr(),
  author: DS.attr(),
  image: DS.attr() 
});
