const { read, updateOne } = require('../../db/collections/rating.js');

module.exports = {

  // API Query Parameters
  // product_id      int        specifies the product for which to retrieve meta data

  // Status: 200 OK
  get: (req, res) => {
    console.log('get_working');
    return readOne( 391884 )
      .then(result => {
        console.log('rating_result:', result);
        return res.json(result);
      })
      .catch(err => {
        res.sendStatus(200);
        console.log(err);
      });
  },
  post: (req, res) => {
    create(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        res.sendStatus(404);
        console.error(err);
      });
  }
};