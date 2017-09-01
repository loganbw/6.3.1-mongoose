var express = require('express');

var HomeController = require('./controllers/home');
var MovieController = require('./controllers/movie');


module.exports =function(app) {
  var homeRouter = express.Router();
  var movieRouter = express.Router();

  homeRouter.get('/', HomeController.home);

  movieRouter.get('/', MovieController.list);
  movieRouter.post('/',MovieController.add);
  movieRouter.get('/:id/delete',MovieController.delete);
  app.use('/', homeRouter);
  app.use('/movie', movieRouter);
};
