const { readAll, readOne, update, create } = require('../../db/collections/reviews.js');
const { pUpdateOne } = require('../../db/collections/productReview.js');

module.exports = {
  get: (req, res) => {
    // console.log('get :', req.query);
    // return readAll( 391884, 10, 'relevant')
    // // return readAll( req.query.product_id, count, req.query.sort )
    //   .then(result => {
    //     console.log('reviews_result:', result);

    //     let results = {results: result};
    //     return res.json(results);
    //   })
    //   .catch(err => {
    //     res.sendStatus(200);
    //     console.log(err);
    //   });
  },
  post: (req, res) => {
    console.log('req.body in reviews:', req.body);
    // Status: 201 CREATED

    /*
    handleSubmitReview({product_id: currentProductId, rating, characteristics, recommend, summary, body, name, email, photos})

    return searchAPI.post('reviews', review) */

    return create(req.body)
      .then(result => {
        return pUpdateOne(result)
          .then(()=> {
            res.sendStatus(201);
          })
          .catch(err => console.log(err));
      })
      .catch((err) => {
        res.sendStatus(404);
        console.error(err);
      });
  },

  put: (req, res) => {
    /*
     path: /:review_id/helpful,'/:review_id/report'
     Status: 204 NO CONTENT
    */
    console.log('put_path', req.route.path);

    let helpful = req.route.path === '/:review_id/helpful';
    let report = req.route.path === '/:review_id/report';
    return update(req.params.review_id, helpful, report)
      .then(() => {
        readOne(req.params.review_id)
          .then(result => {
            // console.log(result);
            readAll(result[0].product_id)
              .then(result => {
                return pUpdateOne({ product: result[0].product_id, results: result })
                  .then(()=> {
                    res.sendStatus(204);
                  })
                  .catch(err => console.log(err));
              });
          });
      })
      .catch((err) => {
        res.sendStatus(404);
        console.error(err);
      });
  }
};


// API Query Parameters
//// product_id	      int               Required ID of the product to post the review for
//// rating	int	      Integer (1-5)     indicating the review rating
//// recommend	      bool	            Value indicating if the reviewer recommends the product
//// photos	          [text]           	Array of text urls that link to images to be shown
//// characteristics	object	          Object of keys representing characteristic_id and values
////                                    representing the review value for that characteristic. { "14": 5, "15": 5...}