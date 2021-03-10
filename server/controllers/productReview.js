const { pReadOne, pReadAll } = require('../../db/collections/productReview.js');

module.exports = {
  get: (req, res) => {
    /*
    return searchAPI.get('reviews',{product_id, sort, count: 25})
    Status: 200 OK
    */
    var productId = req.query.product_id;
    var page = req.query.page || 1;
    var count = req.query.count || 5;
    var sort = req.query.sort || undefined;

    if (sort === undefined) {
      return pReadOne( productId )
        .then(result => {
          // console.log('after pReadOne (step 1) for initial reviews ', result[0].product_id);
          console.log('*** Get_ initial reviews :', productId);
          let newResult = result[0].results;
          let notReported = [];
          if (newResult.length <= count) {
            count = newResult.length;
          }
          for (let i = 0; i < newResult.length; i++) {
            if (!newResult[i].reported) {
              notReported.push(newResult[i]);
            }
          }
          newResult = notReported;
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
      return pReadAll( productId, sort )
        .then(result => {
          // console.log('after pReadAll (step 1) _ sorting by:', sort);
          console.log('*** Get_ sorting by:', sort);
          let newResult = result;
          let notReported = [];
          if (newResult.length <= count) {
            count = newResult.length;
          }
          for (let i = 0; i < newResult.length; i++) {
            if (!newResult[i].reported) {
              notReported.push(newResult[i]);
            }
          }
          newResult = notReported;
          if (page !== 1) {
            return res.json({ results: newResult.slice((page - 1) * count, page * count) });
          }
          return res.json({ results: newResult.slice(0, count) })
            // .then(() => {
            //   res.sendStatus(200);
            // });
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