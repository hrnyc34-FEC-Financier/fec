var mongoose = require('mongoose');
var db = require('../../db');
const table = 'productReview';

console.log(`connected to collection : "${table}"!`);

var productReviewSchema = mongoose.Schema({
  product: { type: Number, unique: true },
  results: []
});

var ProductReview = mongoose.model('ProductReview', productReviewSchema);

const dbMethods = {
  readAll: ( count )=>{
    return ProductReview.find().sort('-product').limit( count ).exec();
  },
  readOne: ( id )=>{
    return ProductReview.findOne({ product: id }).exec();
  },
  create: (one) => {
    return ProductReview.create({
      // schema...not sure yet
    });
  },
  deleteOne: ( id )=>{
    return ProductReview.deleteOne( { product: id });
  }
};

module.exports = dbMethods;
