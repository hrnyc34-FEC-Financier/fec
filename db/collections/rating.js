var mongoose = require('mongoose');
var db = require('../../db');
const table = 'rating';

console.log(`connected to collection : "${table}"!`);

var ratingSchema = mongoose.Schema({
  product_id: { type: Number, unique: true },
  rating: {
    1: { type: Number },
    2: { type: Number },
    3: { type: Number },
    4: { type: Number },
    5: { type: Number } },
  recommended: {
    true: { type: Number },
    false: { type: Number } },
  characteristics: {
    Comfort: { value: Number },
    Fit: { value: Number },
    Length: { value: Number },
    Quality: { value: Number },
  },

});

var Ratings = mongoose.model('Ratings', ratingSchema);

const dbMethods = {
  readAll: ( id, sortingWay, reviewNum, relevant )=>{
    if ( !relevant ) {
      return Ratings.find( { product_id: id } ).sort(`'-${$sortingWay}'`).limit(reviewNum).exec();
    }
    return Ratings.find( { product_id: id } ).sort(`'-${$sortingWay}'`).sort('-date').limit(reviewNum).exec();
  },
  readOne: ( id )=>{
    return Ratings.findOne( { product_id: id } ).exec();
  },
  create: ( one ) => {
    return Ratings.create({
      // schema...not sure yet
    });
  }
};

module.exports = dbMethods;


