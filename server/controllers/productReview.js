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

    var page = req.body.page || 1;
    var count = req.body.count || 5;
    var sort = req.body.sort || undefined;

    if (sort === undefined) {

      return pReadOne(req.body.product_id)
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
          return res.json({ results: newResult.slice(0, count) })
            .then(() => {
              res.sendStatus(200);
            });
        })
        .catch(err => {
          res.sendStatus(404);
          console.log(err);
        });

    } else {

      return pReadAll(req.body.product_id, req.body.sort)
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