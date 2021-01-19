import React from 'react';
import searchAPI from '../../lib/searchEngine.js';
import changeReviewSort from './reviewsList/reviewSort.js';

const sortSelect = (product_id, sort) => {
  // console.log(sort);
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id, sort})
      .then(() => {
        dispatch(changeReviewSort(sort));
      })
      .catch(err => console.error('Unable to process sortBy Request', err));
  };
};

export default sortSelect;