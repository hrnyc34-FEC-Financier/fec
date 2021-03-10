var mongoose = require('mongoose');
var db = require('../../db');
const table = 'SortedReviews';

console.log(`connected to collection : "${table}"!`);

var productReviewSchema = mongoose.Schema({
  product: { type: Number, unique: true },
  results: { type: Array }
});

var SortedReviews = mongoose.model('SortedReviews', productReviewSchema);

const dbMethods = {
  pReadAll: (id, sortingWay = 'newest') => {
    // console.log('sorted reviews by', sortingWay, ', product id : ', id);

    return SortedReviews.findOne({ 'product': id }).exec()
      .then(result => {
        let dateArray = result.results.sort((a, b) => {
          return b.date - a.date;
        });

        if (sortingWay === 'relevance') {
          return dateArray.sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          });
        } else if (sortingWay === 'helpful') {
          return result.results.sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          });
        } else {
          return dateArray;
        }
      })
      .catch(err => console.log(err, 'error'));
  },

  // initial page load reviews of current product
  pReadOne: (id) => {
    // console.log('pReadOne_initial reviews in productReview Model by product# :', id);

    return SortedReviews.find({ product: id }).exec();
  },

  pUpdateOne: (one) => {
    // console.log('pUpdateOne in productReview Model by product_id:', one.product_id);

    return SortedReviews.updateMany(
      {
        product: one.product_id
      },
      {
        product: one.product_id,
        results: one.results
      },
      {
        upsert: true
      });
  },
};

module.exports = dbMethods;
