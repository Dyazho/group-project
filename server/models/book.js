let mongoose = require('mongoose');

// create a model class
let bookModel = mongoose.Schema({
    name: String,
    gender: String,
    question1: String,
    question2: String,
    question3: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);