var express = require ('express');
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema ({
  name: String,
  type: String,
  age: Number,
  imgUrl: String
});

var Directory = mongoose.model ('pets', petSchema);

module.exports = Directory;
