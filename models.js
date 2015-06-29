var MovieModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/mark-imdb',
  idAttribute: '_id',
  defaults: function(){
    return {
      title: 'Unknown Movie Title',
      release: 'YYYY',
      cover: 'http://www.imdb.com/images/nopicture/large/film.png',
      plot: 'In a world...one man...his true destiny...',
      rating: 0
    };
  },
  initialize: function(options){
    console.log("Movie model created with: ", options);
  }
});
