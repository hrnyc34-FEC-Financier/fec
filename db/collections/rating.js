var mongoose = require('mongoose');
var db = require('../../db');
const table = 'rating';

console.log(`connected to collection : "${table}"!`);

var ratingSchema = mongoose.Schema({
  product_id: { type: Number, unique: true },
  ratings: {
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
  readOne: ( id, reviewNum )=>{
    return Ratings.find({ product_id: id }).exec();
  },
  updateOne: ( one, rate, recommend, char, charValue ) => {
  //   var oldRate = one.ratings[rate];
  //   var oldRecommend = one.recommended[recommend];
  //   var newChar = (one.characteristics[char] + charValue) / 2;
  //   return Ratings.update({
  //     product_id: one.product_id
  //   }, {
  //     product_id: one.product_id,
  //     ratings: {$inc: {rate: oldRate}},
  //     recommended: {$inc: {recommend: oldRecommend}},
  //     characteristics: {char: newChar},
  //   });
  }
};

module.exports = dbMethods;


