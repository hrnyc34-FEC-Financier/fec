const { readAll, readOne, update, create, updateRating } = require('../../db/collections/reviews.js');
const { pUpdateOne } = require('../../db/collections/productReview.js');
const { rUpdateAll } = require('../../db/collections/rating.js');

module.exports = {
  get: (req, res) => {
  },
  post: (req, res) => {
    // console.log('req.body in reviews_(step0):', req.body);
    // console.log('Post(step0)_ product_id :', req.body.product_id);
    console.log('*** Post_ product_id :', req.body.product_id);
    /*
      return searchAPI.post('reviews', review)
      Status: 201 CREATED
    */

    let productId = req.body.product_id;

    return create(req.body)
      .then(result => {
        // console.log('after Create(step1) in review:', result.product_id, result);
        productId = result.product_id;
        return pUpdateOne(result)
          .then(result=> {
            // console.log('after pUpdateOne(step3) in review');
            return updateRating( productId )
              .then(result=> {
                // console.log('after updateRating(step4) in review : ', result[0]);
                return rUpdateAll(result[0])
                  .then(() => {
                    // console.log('after rUpdateAll(step5, final) in review to create new review');
                    res.sendStatus(201);
                  });
              });
          });
      })
      .catch((err) => {
        res.sendStatus(404);
        console.error('err_post in reviews:', err);
      });
  },

  put: (req, res) => {
    // console.log('put _ route.path_(step0) : ', req.route.path);
    console.log('*** Put_ route : ', req.route.path);
    /*
     path:   /:review_id/helpful
             /:review_id/report
     Status: 204 NO CONTENT
    */

    let reviewId = req.params.review_id;
    let helpful = req.route.path === '/:review_id/helpful';
    let report = req.route.path === '/:review_id/report';
    let productId = '';

    return update(reviewId, helpful, report)
      .then((result) => {
        // console.log('after update helpful,report (step1) in review');
        readOne(req.params.review_id)
          .then(result => {
            // console.log('after readOne (step2) in review to get productId');
            readAll(result[0].product_id)
              .then(result => {
                productId = result[0].product_id;

                // console.log('after readAll (step3) in review to get all reviews by product id', productId);
                return pUpdateOne({ product_id: result[0].product_id, results: result })
                  .then(()=> {
                    // console.log('after pUpdateOne (step4, final)_helpful and report');
                    res.sendStatus(204);
                  });
              });
          });
      })
      .catch((err) => {
        res.sendStatus(404);
        console.error('err_put in reviews:', err);
      });
  }
};