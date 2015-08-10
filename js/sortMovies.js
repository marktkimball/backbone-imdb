var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var MovieCollection = require('./collections.js');
var MovieCollectionView = require('./collectionView.js');

module.exports = Backbone.View.extend({
  el: '.subMenu',
  template: _.template($('#sortMenuTmpl').html()),
  tagName: 'p',
  className: 'sortByMenu',
  events:{
    'change .sortByMenu': 'selectSort'
  },
  initialize: function (options) {
      this.render();
  },
  render: function () {
    this.$el.append(this.template);
    return this;
  },
  selectSort: function(){
    var sorter = $('.sortByMenu').find('select').val();
    var myCollection = new MovieCollection();
    myCollection.fetch().done(function(){
      var collectionView = new MovieCollectionView({collection: myCollection});
      myCollection.comparator = sorter;
      myCollection.sort();
      $('.singleMovie').remove();
      collectionView.addAll();
    });
  }
});
