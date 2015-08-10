var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieModel = require('./models.js');

module.exports = Backbone.Collection.extend({
  model: MovieModel,
  url: 'http://stormy-ocean-9523.herokuapp.com/collections/imdb',
  comparator: function(model){
    return model.get('release');
  }
});
