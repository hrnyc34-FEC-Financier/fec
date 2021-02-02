var mongoose = require('mongoose');
var db = require('../../db');
const table = 'productReview';

console.log(`connected to collection : "${table}"!`);

var productReviewSchema = mongoose.Schema({
  product: { type: Number, unique: true },
  results: { type: Array }
});

var ProductReviews = mongoose.model('ProductReviews', productReviewSchema);

const dbMethods = {
  pReadAll: (id, sortingWay = 'newest') => {
    console.log('sorted reviews by', sortingWay, ', product id : ', id);
    /* sorted reviews of current product in a productreviews collection
    sort order based on ['relevance', 'helpful', 'newest'] */

    return ProductReviews.findOne({ 'product': id }).exec()
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
    console.log('initial page reviews_product id :', id);

    return ProductReviews.find({ product: id }).exec();
  },

  pUpdateOne: (one) => {
    console.log('updating in productReview by product_id:', one.product_id);
    return ProductReviews.updateMany(
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
