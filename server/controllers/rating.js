const { rReadOne } = require('../../db/collections/rating.js');

module.exports = {
  get: (req, res) => {
  /* API Query Parameters
  product_id      int        specifies the product for which to retrieve meta data

  return searchAPI.get('reviews/meta', {product_id})
  Status: 200 OK */

    return rReadOne(req.body.product_id)
      .then(result => {
        return res.json(result[0]);
      })
      .then(()=> res.sendStatus(200))
      .catch(err => {
        res.sendStatus(404);
        console.log(err);
      });
  },
  post: (req, res) => {
  }
};
