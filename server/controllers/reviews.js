const { readAll, readOne, update, create } = require('../../db/collections/reviews.js');
const { pReadOne, pReadAll, pUpdateOne } = require('../../db/collections/productReview.js');

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
  // post: (req, res) => {
  //   create(req.body)
  //     .then(() => res.sendStatus(201))
  //     .catch((err) => {
  //       res.sendStatus(404);
  //       console.error(err);
  //     });
  // },
  put: (req, res) => {
    // console.log('put_url', req.url);
    // url:  /2263215/helpful
    console.log('put_path', req.route.path);
    // path: /:review_id/helpful ||   '/:review_id/report'

    /*
     Status: 204 NO CONTENT
    */
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

    // saveOne({ name: req.params.review_id, helpfulness: req.params.helpful, reported: req.params.report })
    //   .then(() => res.sendStatus(201))
    //   .catch((err) => {
    //     res.sendStatus(404);
    //     console.error(err);
    //   });
  }
};