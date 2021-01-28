var mongoose = require('mongoose');
var db = require('../../db');
const table = 'result_ProductReview : Reviews';

console.log(`connected to collection : "${table}"!`);

var reviewsSchema = mongoose.Schema({
  product_id: Number,
  review_id: { type: Number, unique: true },
  rating: { type: Number, required: true, max: 5 },
  summary: String,
  recommend: { type: Boolean, default: false },
  response: { type: String, default: null },
  body: String,
  date: { type: Date, default: Date.now },
  reviewer_name: String,
  reviewer_email: String,
  helpfulness: Number,
  reported: { type: Boolean, default: false },
  characteristics: [ String ],
  photos: [ String ]
});

var Reviews = mongoose.model('Reviews', reviewsSchema);

const dbMethods = {
  readAll: ( id, sortingWay, reviewNum, relevant )=>{
    if ( !relevant ) {
      return Review.find( { product_id: id } ).sort(`'-${$sortingWay}'`).limit(reviewNum).exec();
    }
    return Review.find( { product_id: id } ).sort(`'-${$sortingWay}'`).sort('-date').limit(reviewNum).exec();
  },
  readOne: ( id )=>{
    return Review.findOne( { product_id: id } ).exec();
  },
  create: ( one ) => {
    return Review.create({
      // schema...not sure yet
    });
  }
};

module.exports = dbMethods;


