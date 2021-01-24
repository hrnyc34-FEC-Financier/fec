import searchAPI from '../../lib/searchEngine.js';
import changeReviewsList from './reviewsList/reviewsList.js';
import { setRatings } from './setRatings.js';

const postReview = (review) => {
  const product_id = review.product_id;
  return (dispatch) => {
    return searchAPI.post('reviews', review)
      .then(() => {
        return searchAPI.get('reviews', {product_id});
      })
      .then(({ data }) => {
        dispatch(changeReviewsList(data.results));
      })
      .then(() => {
        setRatings(product_id);
      })
      .then(() => console.log('Review has been posted'))
      .catch((err) => console.error('Unable to post Review:', err));
  };
};

export default postReview;