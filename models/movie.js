var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true}
});

var Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;
