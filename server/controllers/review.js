const { readAll } = require('../../db/collections/reviewPhotos.js');

module.exports = {
  get: (res, req)=>{},
  post: (res, req)=>{},
  put: (res, req)=>{
    console.log( req.params.review_id );
    /*
    '/:review_id/helpful'
    '/:review_id/report'

     Status: 204 NO CONTENT
    */
  }
};