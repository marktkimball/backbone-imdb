var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieCollection = require('./collections.js');
var MovieCollectionView = require('./collectionView.js');
var Movie = require('./models.js');
var MovieView = require('./movieView.js');
var AddMovieView = require('./addMovieView.js');
var AddSortMenuView = require('./sortMovies.js');

module.exports = Backbone.Router.extend({
  routes: {
    "" : "home",
    "home" : "home",
    "movie/:id": "singleMovieView",
    "about" : "aboutPageView",
    "contact" : "contactPageView"
  },
  home: function(){
    $('.entryForm').remove();
    $('.aboutPage').remove();
    $('.contactPage').remove();
    $('.movieZone').empty();
    $('.sortByMenu').removeClass('hide');
    $('.movieZone').removeClass('hide');
    var addMovieView = new AddMovieView();
    var addSortMenuView = new AddSortMenuView();
    var myCollection = new MovieCollection();
    myCollection.fetch().done(function(){
      var collectionView = new MovieCollectionView({collection: myCollection});
    })
  },
  singleMovieView: function(id){
    $('.sortByMenu').addClass('hide');
    var movie = new Movie({_id: id});
    movie.fetch().then(function(){
      var movieView = new MovieView ({model: movie});
      $('.movieZone').html(movieView.render().el);
    });
  },
  aboutPageView: function(){
    $('.contactPage').remove();
    $('.sortByMenu').addClass('hide');
    $('.movieZone').addClass('hide');
    var markup = _.template($('#aboutPage').html())
    $('.container').append(markup);
  },
  contactPageView: function(){
    $('.aboutPage').remove();
    $('.sortByMenu').addClass('hide');
    $('.movieZone').addClass('hide');
    var markup = _.template($('#contactPage').html())
    $('.container').append(markup);
  }

});
