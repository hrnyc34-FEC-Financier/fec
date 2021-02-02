const { pReadOne, pReadAll, pUpdateOne } = require('../../db/collections/productReview.js');
// const { readAll, readOne, create } = require('../../db/collections/reviews.js');

module.exports = {
  get: (req, res) => {
    console.log('get :', req.query);
    /* {product_id, sort, count: 25}
       Status: 200 OK                */
    var page = req.query.page || 1;
    var count = req.query.count || 5;
    var sort = req.query.sort || undefined;

    if (sort === undefined) {
      return pReadOne(391884)
        // return pReadOne( req.query.product_id )
        .then(result => {
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
      // return pReadAll( req.query.product_id, req.query.sort )
        .then(result => {
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
  post: (req, res) => {
  }

};


//// page            int      default 1. Selects the page of results to return
//// count           int      default 5. Specifies how many results per page to return
//// sort            text     changes sort order based on 'newest', 'helpful', 'relevant'
//// product_id      int      specifies the product for which to retrieve reviews