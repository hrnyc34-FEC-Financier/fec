const axios = require('axios');
//const { API_TOKEN } = require('../../../env/config.js');
const Authorization = process.env.API_TOKEN;
// TODO: consider deployment_ e.g. process.env.URL
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc';

const searchEngine = {
  //getProductReviews *** endPoint: 'reviews' *** params: {product_id, page, count, sort} *** //product_id required
  //getProductReviewMetaData *** endPoint: `reviews/meta/${product_id}`
  get: (endPoint, params = {}) => {
    console.log("request at ", endPoint);
    return axios.get(`${url}/${endPoint}`, {
      headers: { Authorization },
      params: params,
    });
  },

  //postReview *** endPoint: 'reviews' *** data: {product_id, rating, summary, body, recommended, name, email, photos, characteristics}
  post: (endPoint, data) => {
    console.log("request at ", endPoint);
    return axios.post(`${url}/${endPoint}`, data,
     {
      headers: { Authorization }
    });
  },

  // putReviewHelpful *** endPoint: `reviews/${review_id}/helpful` *** data: { helpfulness }
  // putReviewReport *** endPoint: `reviews/${review_id}/report *** data: { reported }
  put: (endPoint) => {
    console.log("request at ", endPoint);
    return axios.put(`${url}/${endPoint}`, {}, {
      headers: { Authorization }
    });
  },
};

export default searchEngine;
