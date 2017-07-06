var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({

name: String,
superpower: String,


});

module.exports = mongoose.model('Superhero',SuperheroSchema);
