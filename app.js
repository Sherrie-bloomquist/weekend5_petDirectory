var express = require ('express');
var app = express();
var path = require("path");
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var petDirectoryRouter = require ('./routes/petDirectoryRouter');

app.set("port", (process.env.PORT || 3000));
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
app.listen (app.get("port"), function(){
  console.log('listening on port:', app.get("port"));
});

app.use (express.static('public'));
module.exports = app;
