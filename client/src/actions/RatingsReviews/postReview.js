// import searchAPI from '../../lib/searchEngine.js';
// import setReviews from './reviewsList/reviewsList.js';
// import { setRatings } from './setRatings.js';

// const postReview = (review) => {
//   const product_id = review.product_id;
//   return (dispatch) => {
//     console.log(review)
//     console.log('postReview', review.characteristics);
//     return searchAPI.post('reviews', review)
//       .then(() => {
//         setReviews(product_id)
//       })
//       .then(() => {
//         setRatings(product_id);
//       })
//       .then(() => console.log('Review has been posted'))
//       .catch((err) => console.error('Unable to post Review:', err));
//   };
// };

// export default postReview;



import axios from 'axios';
import setReviews from './reviewsList/reviewsList.js';
import { setRatings } from './setRatings.js';

const postReview = (review) => {
  const product_id = review.product_id;
  return (dispatch) => {
    return axios.post('reviews', review)
      .then(() => {
        setReviews(product_id);
      })
      .then(() => {
        setRatings(product_id);
      })
      .then(() => console.log('Review has been posted'))
      .catch((err) => console.error('Unable to post Review:', err));
  };
};

export default postReview;