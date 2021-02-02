//// page            int      default 1. Selects the page of results to return
//// count           int      default 5. Specifies how many results per page to return
//// sort            text     changes sort order based on 'newest', 'helpful', 'relevant'
//// product_id      int      specifies the product for which to retrieve reviews

const { pReadOne, pReadAll, pUpdateOne, pDeleteOne } = require('../../db/collections/productReview.js');
// const { readAll, readOne, create } = require('../../db/collections/reviews.js');
// const { readOne, updateOne } = require('../../db/collections/rating.js');
const { readAll, readOne, create } = require('../../db/collections/reviews.js');

module.exports = {
  post: (req, res) => {
    // handleSubmitReview({product_id: currentProductId, rating, characteristics, recommend, summary, body, name, email, photos})
    // return searchAPI.post('reviews', review)
    // create(req.body)
    //   .then(() => res.sendStatus(201))
    //   .catch((err) => {
    //     res.sendStatus(404);
    //     console.error(err);
    //   });
  },
  // get: (req, res) => {
  // {product_id: currentProductId, rating, characteristics, recommend, summary, body, name, email, photos}
  //   return readOne( 2263222 )
  //     .then(result => {
  //       console.log('a review_result:', result);
  //       return res.json(result);
  //     })
  //     .catch(err => {
  //       res.sendStatus(200);
  //       console.log(err);
  //     });
  // },


  get: (req, res) => {
    console.log('get :', req.query);
    //{product_id, sort, count: 25}
    // Status: 200 OK
    var page = req.query.page || 1;
    var count = req.query.count || 5;
    // var sort = req.query.sort || undefined;
    var sort = 'relevant' || undefined;

    if (sort === undefined) {
      return pReadOne(391884)
        // return readOne( req.query.product_id )
        .then(result => {
          // console.log('productReview_result:', result[0]);
          let newResult = result[0].results;
          for ( let i = 0; i < newResult.length; i++ ) {
            if (newResult[i].reported) {
              newResult.splice(i, 1);
            }
          }
          if (page !== 1) {
            return res.json(newResult.slice((page - 1) * count, page * count));
          }
          return res.json(newResult.slice(0, count));
        })
        .catch(err => {
          res.sendStatus(200);
          console.log(err);
        });
    } else {
      return pReadAll(391884, 5, 'helpfulness')
        // return readAll( req.query.product_id, req.query.sort )
        .then(result => {
          // console.log('reviews_result in product review:', result);
          let newResult = result;
          for ( let i = 0; i < newResult.length; i++ ) {
            if (newResult[i].reported) {
              newResult.splice(i, 1);
            }
          }
          if (page !== 1) {
            return res.json({results: newResult.slice((page - 1) * count, page * count)});
          }
          return res.json({results: newResult.slice(0, count)});
        })
        .catch(err => {
          res.sendStatus(200);
          console.log(err);
        });
    }
  },
  // post: (req, res) => {
  //   create(req.body)
  //     .then(()=> res.sendStatus(201))
  //     .catch(( err ) => {
  //       res.sendStatus(404);
  //       console.error(err);
  //     });
  // }
  // API Query Parameters
  //// product_id	      int               Required ID of the product to post the review for
  //// rating	int	      Integer (1-5)     indicating the review rating
  //// summary	        text	            Summary text of the review
  //// body           	text	            Continued or full text of the review
  //// recommend	      bool	            Value indicating if the reviewer recommends the product
  //// name	            text            	Username for question asker
  //// email          	text             	Email address for question asker
  //// photos	          [text]           	Array of text urls that link to images to be shown
  //// characteristics	object	          Object of keys representing characteristic_id and values
  ////                                    representing the review value for that characteristic. { "14": 5, "15": 5...}
  // Status: 201 CREATED
};