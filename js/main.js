var MovieCollection = require('./collections.js');
var MovieCollectionView = require('./collectionView.js');
var $ = require('jquery');

module.exports = $(document).ready(function(){
  page.init();
});

var page= {

  init: function(){
    page.initStyling();
    page.initEvents();
  },

  initStyling: function(arguments){
    var myCollection = new MovieCollection();
    myCollection.fetch().done(function(){
    var collectionView = new MovieCollectionView({collection: myCollection});
    });


  },

  initEvents: function(arguments){

  }

}
