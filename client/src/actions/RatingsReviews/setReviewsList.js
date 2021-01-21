import searchAPI from '../../lib/searchEngine.js';
import changeReviewsList from './reviewsList/reviewsList.js';

const setReviews = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id:11002})
      .then(({ data }) => {
        dispatch(changeReviewsList(data.results));
      })
      .catch(err => console.error('Unable to get Reviews Data', err));
  };
};

export default setReviews;