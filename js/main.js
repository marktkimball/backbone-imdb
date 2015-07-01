var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Routes = require('./routes.js');

module.exports = $(document).ready(function(){
  new Routes();
  Backbone.history.start();
});
