var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieView = require('./movieView.js');
var MovieModel = require('./models.js');

module.exports = Backbone.View.extend({
  el: '.movieZone',
  collection: null,
  events: {
    //'click .submitMovie': 'submitMovie',
    'change .sortByMenu': 'selectSort'
  },
  initialize: function (options) {
    this.addAll();
  },
  addAll: function () {
    _.each(this.collection.models, this.addOne, this);
  },
  addOne: function (movie) {
    var movieView = new MovieView({model: movie});
    this.$el.append(movieView.render().el);
  },
  //submitMovie: function(event){
    //event.preventDefault();
    //var newMovie = new MovieModel({
      //title: $('input[name="title"]').val(),
      //release: $('input[name="release"]').val(),
      //cover: $('input[name="cover"]').val(),
      //plot: $('textarea').val(),
      //rating: $('select').val()
    //})

    //newMovie.save();
    //this.addOne(newMovie);

    //$('input, textarea').val('');
    //$('select').val('0');
  //},
  selectSort: function(){
    var sorter = $('.sortByMenu').val();
    this.collection.comparator = sorter;
    this.collection.sort();
    this.$el.children('.singleMovie').remove();
    this.addAll();
  }

});
