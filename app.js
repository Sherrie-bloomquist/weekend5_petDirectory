var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var petDirectoryRouter = require ('./routes/petDirectoryRouter');

app.use (bodyParser.json());

app.use ('/petdirectory', petDirectoryRouter);

var mongoURI = "mongodb://localhost:27017/petDirectoryDatabase";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});


//-----spin up server----//
app.listen ('3000', function(){
  console.log('listening on port 3000');
});

app.use (express.static('public'));
