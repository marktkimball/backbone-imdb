var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieCollection = require('./collections.js');
var MovieCollectionView = require('./collectionView.js');
var Movie = require('./models.js');
var MovieView = require('./movieView.js');
var AddMovieView = require('./addMovieView.js');

module.exports = Backbone.Router.extend({
  routes: {
    "" : "home",
    "home" : "home",
    "movie/:id": "singleMovieView"
  },
  home: function(){
    $('.entryForm').remove();
    $('.movieZone').empty();
    var addMovieView = new AddMovieView();
    var myCollection = new MovieCollection();
    myCollection.fetch().done(function(){
      var collectionView = new MovieCollectionView({collection: myCollection});
    })
  },
  singleMovieView: function(id){
    $('.sortByMenu').remove();
    var movie = new Movie({_id: id});
    movie.fetch().then(function(){
      var movieView = new MovieView ({model: movie});
      $('.movieZone').html(movieView.render().el);
    });
  }
});
