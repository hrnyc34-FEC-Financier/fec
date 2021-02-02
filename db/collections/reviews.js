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
  photos: [],
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
  /* sorted reviews of current product in reviews
    sort order based on ['relevance', 'helpful', 'newest'] */
  readAll: (id, sortingWay = 'newest') => {
    console.log('readAll_reviews_product id :', id, 'sorted by', sortingWay);

    if (sortingWay === 'relevance') {
      return Result.aggregate().match({ product_id: id, reported: false }).sort('-helpfulness').sort('-date').exec();
    } else if (sortingWay === 'helpful') {
      return Result.aggregate().match({ product_id: id, reported: false }).sort('-helpfulness').exec();
    }
    return Result.aggregate().match({ product_id: id }).sort('-date').exec();
  },
  readOne: (id) => {
    console.log('readOne_reviews_working_review id :', id);

    return Result.find({ review_id: id }).exec();
  },
  update: (id, helpful, report) => {
    if (report === true) {
      console.log('update_reported in reviews', report);

      return Result.updateMany(
        { review_id: id }, { 'reported': true }, { new: true }).exec();

    } else if (helpful === true) {
      console.log('update_helpfulness +1 in reviews', helpful);

      return Result.updateOne(
        { review_id: id }, { '$inc': { helpfulness: 1 } }, { new: true }).exec();

    }
  },
  create: (one) => {
    let productId = one.product_id;
    let reviewId = 0;
    if (!one.product_id) {
      console.log('create new ProductId_reviews');
      return Result.find({}).sort({ product_id: -1 }).limit(1)
        .then((result) => {
          productId = result[0].product_id + 1;
          return Result.find({}).sort({ review_id: -1 }).limit(1)
            .then(result => {
              reviewId = result[0].review_id + 1;
              return Result.create({
                product_id: productId,
                review_id: reviewId,
                rating: one.rating,
                helpfulness: one.helpfulness,
                recommend: one.recommend,
                reported: one.reported,
                response: one.response,
                reviewer_name: one.reviewer_name,
                reviewer_email: one.reviewer_email,
                summary: one.summary,
                body: one.body,
                photos: one.photos,
                Length: one.Length,
                Fit: one.Fit,
                Comfort: one.characteristics.Comfort,
                Quality: one.characteristics.Quality,
              });
            })
            .then(() => {
              return Result.find({ product_id: productId }).exec()
                .then(result => {
                  return { product_id: result[0].product_id, results: result };
                });
            });
        })
        .catch(err => console.log('err_create new post w/ new productId : ', err));
    }
    console.log('create with existing ProductId_reviews');
    return Result.find({}).sort({ review_id: -1 }).limit(1)
      .then(result => {
        reviewId = result[0].review_id + 1;
        return Result.create({
          product_id: productId,
          review_id: reviewId,
          rating: one.rating,
          helpfulness: one.helpfulness,
          recommend: one.recommend,
          reported: one.reported,
          response: one.response,
          reviewer_name: one.reviewer_name,
          reviewer_email: one.reviewer_email,
          summary: one.summary,
          body: one.body,
          photos: one.photos,
          Length: one.Length,
          Fit: one.Fit,
          Comfort: one.characteristics.Comfort,
          Quality: one.characteristics.Quality,
        });
      })
      .then(() => {
        return Result.find({ product_id: productId }).exec()
          .then(result => {
            console.log('get all review in review for product id : ', result[0].product_id);
            return { product_id: result[0].product_id, results: result };
          });
      })
      .catch(err => console.log('err_create new review post : ', err));
  },
  updateRating: (id) => {
    console.log('updateRating after changing info in reviews_ product_id : ', id);
    return Result.aggregate().match({ product_id: id }).group({
      _id: '$product_id',
      1: { $sum: { $cond: {
        if: { $eq: ['$rating', 1] },
        then: 1,
        else: 0
      }}},
      2: { $sum: { $cond: {
        if: { $eq: ['$rating', 2] },
        then: 1,
        else: 0
      }}},
      3: { $sum: { $cond: {
        if: { $eq: ['$rating', 3] },
        then: 1,
        else: 0
      }}},
      4: { $sum: { $cond: {
        if: { $eq: ['$rating', 4] },
        then: 1,
        else: 0
      }}},
      5: { $sum: { $cond: {
        if: { $eq: ['$rating', 5] },
        then: 1,
        else: 0
      }}},
      true: { $sum: { $cond: {
        if: { $eq: ['$recommend', true] },
        then: 1,
        else: 0
      }}},
      false: { $sum: { $cond: {
        if: { $eq: ['$recommend', false] },
        then: 1,
        else: 0
      }}},
      Length: { $avg: '$Length' },
      Comfort: { $avg: '$Comfort' },
      Fit: { $avg: '$Fit' },
      Quality: { $avg: '$Quality' }
    }).project({
      _id: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, true: 1, false: 1,
      Length: { $cond: {
        if: { $eq: [null, '$Length'] },
        then: 0,
        else: { $round: ['$Length', 1] }
      }
      },
      Comfort: { $cond: {
        if: { $eq: [null, '$Comfort'] },
        then: 0,
        else: { $round: ['$Comfort', 1] }
      }
      },
      Fit: { $cond: {
        if: { $eq: [null, '$Fit'] },
        then: 0,
        else: { $round: ['$Fit', 1] }
      }
      },
      Quality: { $cond: {
        if: { $eq: [null, '$Quality'] },
        then: 0,
        else: { $round: ['$Quality', 1] }
      }
      }
    }).addFields({
      product_id: '$_id',
      ratings: {
        1: '$1',
        2: '$2',
        3: '$3',
        4: '$4',
        5: '$5'
      },
      recommended: {
        false: '$false',
        true: '$true'
      },
      characteristics: {
        Comfort: '$Comfort',
        Fit: '$Fit',
        Length: '$Length',
        Quality: '$Quality'
      }
    }).project({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      true: 0,
      false: 0,
      Length: 0,
      Comfort: 0,
      Fit: 0,
      Quality: 0
    });
  }
};

module.exports = dbMethods;