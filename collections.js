var MovieCollection = Backbone.Collection.extend({
  model: MovieModel,
  url: 'http://tiy-fee-rest.herokuapp.com/collections/mark-imdb',
  comparator: function(model){
    return model.get('release');
  }
});
