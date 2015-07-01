var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieModel = require('./models.js');
var MovieView = require('./movieView.js');

module.exports = Backbone.View.extend({
  el: '.movieZone',
  template: _.template($('#addMovieTmpl').html()),
  tagName: 'div',
  className: 'entryForm',
  events:{
    'click .submitMovie': 'submitMovie'
  },
  initialize: function (options) {
      this.render();
  },
  render: function () {
    this.$el.append(this.template);
    return this;
  },
  submitMovie: function(event){
    event.preventDefault();
    var newMovie = new MovieModel({
      title: $('input[name="title"]').val(),
      release: $('input[name="release"]').val(),
      cover: $('input[name="cover"]').val(),
      plot: $('textarea').val(),
      rating: $('select[name="rating"]').val()
    });
    $('.entryForm').find('h4').removeClass('hide');
    setTimeout(function(){
      $('.entryForm').find('h4').addClass('hide');
      }, 1000);
    newMovie.save();

    $('input, textarea').val('');
    $('select').val('0');
  }
});
