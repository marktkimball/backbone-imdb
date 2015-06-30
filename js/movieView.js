var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');

module.exports = Backbone.View.extend({
  template: _.template($('#singleMovieTmpl').html()),
  tagName: 'div',
  className: 'singleMovie',
  events: {
    'click .delete': 'deleteMovie',
    'click .edit': 'editMovie',
    'click .submitEdit': 'submitEdit',
    'click .cancelEdit': 'cancelEdit'
  },
  initialize: function (options) {

  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },
  deleteMovie: function(event){
    event.preventDefault();
    this.remove();
    this.model.destroy();
  },
  editMovie: function(event){
    event.preventDefault();
    this.$el.children('.regularMovie').addClass('hide');
    this.$el.children('.editMovie').removeClass('hide');
  },
  submitEdit: function(event){
    event.preventDefault();

    var $valueGrab = this.$el.children('.editMovie');
    var editMovie = {
      title: $valueGrab.find('.editTitle').val(),
      release: $valueGrab.find('.editRelease').val(),
      cover: $valueGrab.find('.editCover').val(),
      plot: $valueGrab.find('.editPlot').val(),
      rating: $valueGrab.find('.editRating').val()
    }
    this.$el.children('.editMovie').addClass('hide');
    this.model.save(editMovie);
    this.render();
  },
  cancelEdit: function(event){
    event.preventDefault();
    this.$el.children('.regularMovie').removeClass('hide');
    this.$el.children('.editMovie').addClass('hide');
  }
});
