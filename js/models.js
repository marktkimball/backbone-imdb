var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  urlRoot: 'http://stormy-ocean-9523.herokuapp.com/collections/imdb',
  idAttribute: '_id',
  defaults: function(){
    return {
      title: 'Unknown Movie Title',
      release: 'YYYY',
      cover: 'http://www.imdb.com/images/nopicture/large/film.png',
      plot: 'In a world...one man...his true destiny...',
      rating: '0'
    };
  },
  initialize: function(options){
  }
});
