var MovieView = Backbone.View.extend({
  template: _.template($('#singleMovieTmpl').html()),
  tagName: 'div',
  className: 'singleMovie',
  events: {
    'click .delete': 'deleteMovie',
    'click .edit': 'editMovie',
    'click .submitEdit': 'submitEdit'
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
    this.$el.children('.editMovie').removeClass('hide');
  },
  submitEdit: function(event){
    event.preventDefault();

    var editMovie = {
      title: $('input[name="editTitle"]').val(),
      release: $('input[name="editRelease"]').val(),
      cover: $('input[name="editCover"]').val(),
      plot: $('textarea[name="editPlot"]').val(),
      rating: $('select[name="editRating"]').val()
    }
    this.$el.children('.editMovie').addClass('hide');
    this.model.save(editMovie);
    this.render();
  }
});


var MovieCollectionView = Backbone.View.extend({
  el: '.container',
  collection: null,
  events: {
    'click .submitMovie': 'submitMovie'
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

    $('input, textarea').val('');
    $('select').val('0');
  }

});
