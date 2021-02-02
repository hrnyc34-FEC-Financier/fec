const { readAll, readOne, update, create, updateRating } = require('../../db/collections/reviews.js');
const { pUpdateOne } = require('../../db/collections/productReview.js');
const { rUpdateOne } = require('../../db/collections/rating.js');

module.exports = {
  get: (req, res) => {
  },
  post: (req, res) => {
    console.log('req.body in reviews:', req.body);
    /* API Query Parameters
      product_id	      int               Required ID of the product to post the review for
      rating	int	      Integer (1-5)     indicating the review rating
      recommend	      bool	            Value indicating if the reviewer recommends the product
      photos	          [text]           	Array of text urls that link to images to be shown
      characteristics	object	          Object of keys representing characteristic_id and values      representing the review value for that
                                        characteristic.{ "14": 5, "15": 5...}

      handleSubmitReview({product_id: currentProductId, rating, characteristics, recommend, summary, body, name, email, photos})

      return searchAPI.post('reviews', review)
      Status: 201 CREATED   */
    let productId = req.body.product_id;

    return create(req.body)
      .then(result => {
        console.log('result:', result.product_id);
        productId = result.product_id;
        return pUpdateOne(result)
          .then(result=> {
            console.log('after updating productreview_ product id : ', result);
            return updateRating( productId )
              .then(result=> {
                console.log('after updateRating:', result);
                return rUpdateOne(result[0])
                  .then(() => {
                    res.sendStatus(201);
                  })
                  .catch(err=>console.log(err));
              });
          });
      })
      .catch((err) => {
        res.sendStatus(404);
        console.error('err_post in reviews:', err);
      });
  },

  put: (req, res) => {
    console.log('put _ route.path : ', req.route.path);
    /*
     path:   /:review_id/helpful
             /:review_id/report
     Status: 204 NO CONTENT
    */
    let helpful = req.route.path === '/:review_id/helpful';
    let report = req.route.path === '/:review_id/report';
    let productId = '';

    return update(req.params.review_id, helpful, report)
      .then(() => {
        readOne(req.params.review_id)
          .then(result => {
            readAll(result[0].product_id)
              .then(result => {
                productId = result[0].product_id;
                return pUpdateOne({ product_id: result[0].product_id, results: result })
                  .then(()=> {
                    return updateRating( productId )
                      .then(result=> {
                        return rUpdateOne(result[0])
                          .then(() => {
                            res.sendStatus(204);
                          })
                          .catch(err=>console.log(err));
                      })
                      .catch(err=> console.log('err_rating_put in reviews:', err));
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