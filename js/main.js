var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Routes = require('./routes.js');

module.exports = $(document).ready(function(){
  page.init();
});

var page= {

  init: function(){
    page.initStyling();
  },

  initStyling: function(arguments){
    new Routes();
    Backbone.history.start();
    }


  };
