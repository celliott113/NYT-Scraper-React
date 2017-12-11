// Dependancies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var cheerio = require('cheerio');

// Use bodyParser with app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Make a public static directory
app.use(express.static('public'));

// MongooseDB connection
mongoose.connect('mongodb://localhost/nytreact');

var db = mongoose.connection;

// Throw MongooseDB errors
db.on('error', function (err) {
    console.log('Mongoose Error: ', err);
});

// Throw MongooseDB connection success message
db.once('open', function () {
    console.log('Mongoose connection successful!');
});

// Bring in models
var Article = require('./models/Article.js');

// Route to main index.html file
app.get('/', function (req, res) {
    res.send('./public/index.html');
});

app.get('/api/saved', function (req, res) {
    Article.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});

app.post('/api/saved', function (req, res) {

})


// Listen on port 3000
app.listen(process.env.PORT || 3000, function () {
    console.log('App running on port: 3000');
});