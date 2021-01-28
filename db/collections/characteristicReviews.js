var mongoose = require('mongoose');
var db = require('../../db');
const table = 'characteristicReviews';

console.log(`connected to collection : "${table}"!`);

var charReviewSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  review_id: Number,
  characteristic_id: { type: Number, ref: 'Chars' },
  // characteristic_id: { type: mongoose.Schema.Types.id, ref: 'Chars' },
  value: Number,
});

var CharReview = mongoose.model('CharReview', charReviewSchema);

const dbMethods = {
  readAll: ( id )=> {
    return CharReview.find( { review_id : id } ).exec();
  }
};
module.exports = dbMethods;