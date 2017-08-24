var Movie = require('../models/movie');
var MovieController = {
  list: function (req,res) {

    Movie.find().then(function(movies){
        res.render('movie/list', {movies: movies});
    });

  },
  add: function (req,res) {

    var title = req.body.title;
       var newMovie = new Movie({title: title });
       newMovie.save(function(){
         res.redirect('/movie');
       });


  }
};
module.exports = MovieController;
