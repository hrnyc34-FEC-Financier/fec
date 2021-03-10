const { rReadOne } = require('../../db/collections/rating.js');

module.exports = {
  get: (req, res) => {
  /*
  return searchAPI.get('reviews/meta', {product_id})
  Status: 200 OK
   */

    var productId = req.query.product_id;

    return rReadOne( productId )
      .then(result => {
        // console.log('after rReadOne in rating:', result[0].product_id);
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
