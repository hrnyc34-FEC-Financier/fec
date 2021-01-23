import searchAPI from '../../lib/searchEngine.js';
import setReviewsList from './setReviewsList.js';
import { calculateProductAvgRating, calculateProductAvgStarRating, setRatings } from './setRatings';

const reportReview = (product_id, review_id) => {
  return (dispatch) => {
    return searchAPI.put(`reviews/${review_id}/report`);
  };
};

export default reportReview;