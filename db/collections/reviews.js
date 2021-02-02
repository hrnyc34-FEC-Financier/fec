var mongoose = require('mongoose');
var db = require('../../db');
const table = 'result_ProductReview : results';

console.log(`connected to collection : "${table}"!`);

var resultSchema = mongoose.Schema({
  product_id: Number,
  review_id: { type: Number, unique: true },
  rating: { type: Number, required: true },
  helpfulness: Number,
  recommend: { type: Boolean, default: false },
  reported: { type: Boolean, default: false },
  response: { type: String, default: '' },
  reviewer_name: String,
  reviewer_email: String,
  summary: String,
  body: String,
  photos: [String],
  Length: Number,
  Fit: Number,
  Comfort: Number,
  Quality: Number,
  Size: Number,
  Width: Number,
  date: { type: Date, default: Date.now },
});

var Result = mongoose.model('Result', resultSchema);

const dbMethods = {
  // sorted reviews of current product in a results collection
  readAll: (id, sortingWay = 'helpfulness') => {
    console.log('reviews is working', id, sortingWay);
    if (sortingWay === 'relevant') {
      return Result.aggregate()
        .match({ product_id: id, reported: false }).sort('-helpfulness').sort('-date').exec();
    } else {
      console.log('yayyyyyyy')
      return Result.aggregate().match({ product_id: id }).sort('-' + sortingWay).exec();
    }
  },
  readOne: (id) => {
    return Result.find({ review_id: id }).exec();
  },
  update: (id, helpful, report) => {
    if (report === true) {
      return Result.findOneAndUpdate({
        review_id: id
      }, {
        'reported': true
      },
        { new: true }).exec();
    } else if (helpful === true) {
      return Result.updateOne({
        review_id: id
      }, {
        '$inc': { helpfulness: 1 }
      },
        { new: true }).exec();
    }
  },
  create: (one) => {
    // return Result.create({
    //   product_id: one.product_id,
    //   review_id: one.review_id,
    //   rating: one.rating,
    //   helpfulness: one.helpfulness,
    //   recommend: one.recommend,
    //   reported: one.reported,
    //   response: one.response,
    //   reviewer_name: one.reviewer_name,
    //   reviewer_email: one.reviewer_email,
    //   summary: one.summary,
    //   body: one.body,
    //   photos: one.photos,
    //   Length: one.Length,
    //   Fit: one.Fit,
    //   Comfort: one.Comfort,
    //   Quality: one.Quality,
    //   Size: one.Size,
    //   Width: one.Width,
    // date: one.product_id,
    // });
  }
};

module.exports = dbMethods;


