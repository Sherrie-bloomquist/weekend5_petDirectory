var express = require ('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Pet = require ('../models/petSchema');

//-------get pets from database--------//
router.get('/', function(req, res){
  Pet.find({}, function(err, directoryResults){
    if (err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('directory -->', directoryResults);
      res.send(directoryResults);
    }
  }); //end Directory.find
}); //end router.get


//--------send new pet data to the database----------//
router.post('/', function (req, res){
  console.log('in router.post');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newPet = new Pet ({
    name: sentData.name,
    type: sentData.type,
    age: sentData.age,
    imgUrl: sentData.imgUrl,
  }); //end newPet

  newPet.save(function(err){
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('new pet created');
      res.sendStatus(200);
    }
  }); //end newPet.save
}); //end router.post

//---------delete pet from database----------//
// router.delete('/deletePet', function(req, res){
//
//
// }); //end router.delete

module.exports = router;
