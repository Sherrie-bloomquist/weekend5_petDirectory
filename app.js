var express = require ('express');
var app = express();
var mongoose = require ('mongoose');
var bodyParser = require ('body-parser');
var petDirectoryRouter = require ('./routes/petDirectoryRouter');

app.use (bodyParser.json());

app.use ('/petdirectory', petDirectoryRouter);

mongoose.connect('mongodb://localhost:27017/petDirectoryDatabase');

//-----spin up server----//
app.listen ('3000', function(){
  console.log('listening on port 3000');
});

app.use (express.static('public'));
