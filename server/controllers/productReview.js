const { pReadOne, pReadAll } = require('../../db/collections/productReview.js');

module.exports = {
  get: (req, res) => {
    /*
    // page            int      default 1. Selects the page of results to return
    // count           int      default 5. Specifies how many results per page to return
    // sort            text     changes sort order based on ['relevance', 'helpful', 'newest']
    // product_id      int      specifies the product for which to retrieve reviews

    return searchAPI.get('reviews',{product_id, sort, count: 25})
    Status: 200 OK
    */
    var productId = 391884;
    // var productId = req.query.product_id;
    var page = req.query.page || 1;
    var count = req.query.count || 5;
    var sort = req.query.sort || undefined;

    console.log('query in productReview', req.query);
    console.log('productId:', productId);

    if (sort === undefined) {
      console.log('productReview_ sort is:', sort);

      return pReadOne( productId )
        .then(result => {
          let newResult = result[0].results;
          if (newResult.length <= count) {
            count = newResult.length;
          }
          for (let i = 0; i < newResult.length; i++) {
            if (newResult[i].reported) {
              newResult.splice(i, 1);
            }
          }
          if (page !== 1) {
            return res.json(newResult.slice((page - 1) * count, page * count));
          }
          return res.json({ results: newResult.slice(0, count) });
        })
        .catch(err => {
          // res.sendStatus(404);
          console.log(err);
        });

    } else {
      console.log('productReview_ sorting by:', sort);
      return pReadAll( productId, sort )
        .then(result => {
          let newResult = result;
          if (newResult.length <= count) {
            count = newResult.length;
          }
          for (let i = 0; i < newResult.length; i++) {
            if (newResult[i].reported) {
              newResult.splice(i, 1);
            }
          }
          if (page !== 1) {
            return res.json({ results: newResult.slice((page - 1) * count, page * count) });
          }
          return res.json({ results: newResult.slice(0, count) })
            .then(() => {
              res.sendStatus(200);
            });
        })
        .catch(err => {
          res.sendStatus(404);
          console.log(err);
        });

    }
  },
  post: (req, res) => {
  }

};