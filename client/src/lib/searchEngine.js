import React from "react";
import axios from "axios";

let searchEngine = {

  getProductReviews: (productId, page, count, sort) => {
    axios({
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews',
      params: {product_id: productId, page, count, sort}
    })
      .then(result => {
        return result.data;
      })
      .catch(err => console.error(err));
  },

  getProductReviewMetaData: (productId) => {
    axios({
      method: 'GET',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta',
      params: {product_id: productId}
    })
      .then(result => {
        return result.data;
      })
      .catch(err => console.error(err));
  },

  postReview: (productId, rating, recommendation, summary, body, photos, user, email) => {
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews',
      data: {product_id: productId, rating, recommendation, summary, body, }
    })
      .then(result => {
        return result.data;
      })
      .catch(err => console.error(err));
  },

  putReviewHelpful: (reviewId, helpfulness) => {
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${reviewId}/helpful`,
      data: {helpfulness}
    })
      .then(result => {
        return result.data;
      })
      .catch(err => console.error(err));
  },

  putReviewReport: (reviewId, reported) => {
    axios({
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${reviewId}/report`,
      data: {reported}
    })
      .then(result => {
        return result.data;
      })
      .catch(err => console.error(err));
  }
};

export default searchEngine;