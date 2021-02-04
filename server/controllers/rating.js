const { rReadOne } = require('../../db/collections/rating.js');

module.exports = {
  get: (req, res) => {
    console.log('query in rating', req.query);
  /* API Query Parameters
  product_id      int        specifies the product for which to retrieve meta data

  return searchAPI.get('reviews/meta', {product_id})
  Status: 200 OK */

    var productId = 391884;
    // var productId = req.query.product_id;

    return rReadOne( productId )
      .then(result => {
        console.log('result_ rating_controller:', result);
        return res.json(result[0]);
      })
      // .then(()=> res.sendStatus(200))
      .catch(err => {
        res.sendStatus(404);
        console.log(err);
      });
  },
  post: (req, res) => {
  }
};
