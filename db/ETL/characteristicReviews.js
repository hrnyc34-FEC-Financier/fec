var mongoose = require('mongoose');
var db = require('../../db');
const table = 'characteristicReviews';

console.log(`connected to collection : "${table}"!`);

var charReviewSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  review_id: Number,
  characteristic_id: { type: Number, ref: 'Chars' },
  value: Number,
});

var CharReview = mongoose.model('CharReview', charReviewSchema);

CharReview.statics.group = function () {
  return this.aggregate([
    {
      $lookup: {
        from: 'chars',
        localField: 'characteristic_id',
        foreignField: 'id',
        as: 'productId'
      }
    }, {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [{ $arrayElemAt: ['$productId', 0] }, '$$ROOT']
        }
      }
    }, {
      $project: {
        productId: 0, characteristic_id: 0
      }
    }, {
      $group: {
        _id: '$review_id',
        char: {
          $push: { name: '$name', value: '$value' }
        },
      }
    },
    {
      $project: {
        _id: 1, review_id: '$_id', char: 1
      }
    },
    {
      $out: { db: 'review', coll: 'char2reviews' }
    }
  ], { allowDiskUse: true });
};

/* result after aggregations
< first stage >
  _id:60125653579227b426f6d17c
  product_id:1
  name:"Length"
  review_id:2
  value:4

< final stage >
  _id:1
  char :[{Comfort:0},{Fit:0},{Length:0},{Quality:0}]
  review_id: 1
*/

module.exports = CharReview;