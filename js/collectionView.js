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
  selectSort: function(){
    var sorter = $('.sortByMenu').val();
    this.collection.comparator = sorter;
    this.collection.sort();
    this.$el.children('.singleMovie').remove();
    this.addAll();
  }

});
