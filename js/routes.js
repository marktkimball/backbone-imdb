var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var MovieCollection = require('./collections.js');
var MovieCollectionView = require('./collectionView.js');

module.exports = Backbone.Router.extend({
  routes: {
    "" : "home",
    "home" : "home"
  },
  home: function(){
    var myCollection = new MovieCollection();
    myCollection.fetch().done(function(){
      var collectionView = new MovieCollectionView({collection: myCollection});
    })
  }
});
