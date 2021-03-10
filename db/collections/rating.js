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
    Comfort: { id: Number, value: Number },
    Fit: { id: Number, value: Number },
    Length: { id: Number, value: Number },
    Quality: { id: Number, value: Number },
  },
});

var Ratings = mongoose.model('Ratings', ratingSchema);

const dbMethods = {
  rReadOne: ( id, reviewNum )=>{
    // console.log( 'rReadOne in rating Model _ by product_id : ', id );

    return Ratings.find({ product_id: id }).exec();
  },
  rUpdateAll: ( one ) => {
    // console.log('rUpdateOne in rating Model_ by productId:', one.product_id);

    return Ratings.updateMany({
      product_id: one.product_id
    }, {
      product_id: one.product_id,
      ratings: one.ratings,
      recommended: one.recommended,
      characteristics: one.characteristics,
    },{
      upsert: true
    }).exec();
  },
};

module.exports = dbMethods;