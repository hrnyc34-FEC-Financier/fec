import React from 'react';
import searchAPI from '../../lib/searchEngine.js';
import changeReviewSort from './reviewsList/reviewSort.js';
import changeReviewsList from './reviewsList/reviewsList.js';

const sortSelect = (product_id, sort) => {
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id, sort, count: 25})
      .then(({ data }) => {
        dispatch(changeReviewSort(sort));
        dispatch(changeReviewsList(data.results));
      })
      .catch(err => console.error('Unable to process sortBy Request', err));
  };
};

export default sortSelect;

// API Query Parameters
// parameter       type     description
// page            int      default 1. Selects the page of results to return
// count           int      default 5. Specifies how many results per page to return
// sort            text     changes sort order based on 'newest', 'helpful', 'relevant'
// product_id      int      specifies the product for which to retrieve reviews