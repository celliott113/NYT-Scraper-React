// Dependancies
var mongoose = require('mongoose');

// Create a Mongoose schema
var Schema = mongoose.Schema;

// Create the article schema
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        date: Date
    }
});

// Create the model with the ArticleSchema
var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;