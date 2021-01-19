import searchAPI from '../../lib/searchEngine.js';
import setReviewsList from './setReviewsList.js';
import { calculateProductAvgRating, calculateProductAvgStarRating, setRatings } from './setRatings';

const reportReview = (product_id, review_id) => {
  // console.log(product_id)
  console.log('reportReview commented out: review_id is', review_id);
  //send report then refresh reviewsList
  // return (dispatch) => {
  //   return searchAPI.put(`reviews/${review_id}/report`);
  //   //reset reviewsList with setReviews.js and query with current sort
  //   //reset reviewRatings with setRatings.js
  // };
};

export default reportReview;