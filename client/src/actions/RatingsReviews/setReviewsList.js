import searchAPI from '../../lib/searchEngine.js';
import changeReviewsList from './reviewsList/reviewsList.js';

const setReviews = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id}).then(({ data }) => {
      console.log('setReviews data', data);
      dispatch(changeReviewsList(data.results));
    });
  };
};

export default setReviews;