import React from 'react';
import searchAPI from '../../lib/searchEngine.js';
import changeReviewSort from './reviewsList/reviewSort.js';
import changeReviewsList from './reviewsList/reviewsList.js';

const sortSelect = (product_id, sort) => {
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id, sort})
      .then(({ data }) => {
        dispatch(changeReviewSort(sort));
        dispatch(changeReviewsList(data.results));
      })
      .catch(err => console.error('Unable to process sortBy Request', err));
  };
};

export default sortSelect;