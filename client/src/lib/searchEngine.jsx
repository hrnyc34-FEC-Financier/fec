import React from "react";
import axios from "axios";

let searchEngine = {

  getReviews: (productId, page, count, sort) => {
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

  getProductReviewData: (productId) => {
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

  post: () => {
  },

  put: () =>{

  }
};

export default searchEngine;