var MovieView = Backbone.View.extend({
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


var MovieCollectionView = Backbone.View.extend({
  el: '.container',
  collection: null,
  events: {
    'click .submitMovie': 'submitMovie',
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
  submitMovie: function(event){
    event.preventDefault();
    var newMovie = new MovieModel({
      title: $('input[name="title"]').val(),
      release: $('input[name="release"]').val(),
      cover: $('input[name="cover"]').val(),
      plot: $('textarea').val(),
      rating: $('select').val()
    })

    newMovie.save();
    this.addOne(newMovie);
    //this.$el.children('.singleMovie').remove();
    //this.addAll();

    $('input, textarea').val('');
    $('select').val('0');
  },
  selectSort: function(){
    var sorter = $('.sortByMenu').val();
    this.collection.comparator = sorter;
    this.collection.sort();
    this.$el.children('.singleMovie').remove();
    this.addAll();
  }

});
