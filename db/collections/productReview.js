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
  pReadAll: (id, reviewNum, sortingWay) => {
    // sorted reviews of current product in a productreviews collection
    return ProductReviews.findOne({ 'product': id }).exec()
      .then(result => {
        // var test = {results:[{helpfulness:2, date:1},{helpfulness:2, date:1},{helpfulness:1, date: 0521},{helpfulness:2, date:0523},{helpfulness:3, date:0522},{helpfulness:2, date:0527}]};
        let dateArray = result.results.sort((a, b) => {
          return b.date - a.date;
        });

        if (sortingWay === 'relevant') {
          return dateArray.sort((a, b) => {
            return b.helpfulness - a.helpfulness;
          });
        } else if (sortingWay === 'helpfulness') {
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
    return ProductReviews.find({ product: id }).exec();
  },
  pUpdateOne: (one) => {
    return ProductReviews.updateMany(
      {
        product: one.product
      },
      {
        product: one.product,
        results: one.results
      }).exec();
  },
  // pDeleteOne: (id) => {
  //   return ProductReviews.deleteOne({ product: id });
  // }
};

module.exports = dbMethods;
