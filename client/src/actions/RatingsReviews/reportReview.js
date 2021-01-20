import searchAPI from '../../lib/searchEngine.js';
import setReviewsList from './setReviewsList.js';
import { calculateProductAvgRating, calculateProductAvgStarRating, setRatings } from './setRatings';

const reportReview = (product_id, review_id) => {
  console.log('reportReview commented out: review_id is', review_id);
  //send report then refresh reviewsList
  // return (dispatch) => {
  //   return searchAPI.put(`reviews/${review_id}/report`);
  // };
};

export default reportReview;