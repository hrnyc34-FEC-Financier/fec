var mongoose = require('mongoose');
var db = require('../../db');
const table = 'photos';

console.log(`connected to collection : "${table}"!`);

var photosSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  review_id: Number,
  url: String
});

var Photos = mongoose.model('Photos', photosSchema);

const dbMethods = {
  readAll: ( id )=>{
    return Photos.find({ review_id: id }).exec();
  }
};

module.exports = dbMethods;