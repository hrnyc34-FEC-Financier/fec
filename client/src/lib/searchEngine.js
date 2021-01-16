const axios = require('axios');
const { API_TOKEN } = require('../../../env/config.js');
const Authorization = API_TOKEN;
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc';

let searchEngine = {

  //getProductReviews *** endPoint: 'reviews' *** params: {product_id, page, count, sort} *** //product_id required
  //getProductReviewMetaData *** endPoint: `reviews/meta/${product_id}`
  get: (endPoint, params = {}) => {
    axios
      .get(`${url}/${endPoint}`, {
        headers: { Authorization },
        params: params,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  //postReview *** endPoint: 'reviews' *** data: {product_id, rating, summary, body, recommended, name, email, photos, characteristics}
  post: (endPoint, data) => {
    axios
      .post(`${url}/${endPoint}`, {
        headers: { Authorization },
        data: data,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  },

  // putReviewHelpful *** endPoint: `reviews/${review_id}/helpful` *** data: { helpfulness }
  // putReviewReport *** endPoint: `reviews/${review_id}/report *** data: { reported }
  put: (endPoint, data) => {
    axios
      .put(`${url}/{endPoint}`, {
        headers: { Authorization },
        data: data,
      })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
  }
};