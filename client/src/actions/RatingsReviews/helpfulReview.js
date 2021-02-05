// import searchAPI from '../../lib/searchEngine.js';

// const helpfulReview = (review_id) => {
//   return (dispatch) => {
//     return searchAPI.put(`reviews/${review_id}/helpful`)
//       .catch(err => console.error('Unable to send review as helpful', err));
//   };
// };

// export default helpfulReview;


import axios from 'axios';
// import searchAPI from '../../lib/searchEngine.js';

const helpfulReview = (review_id) => {
  return (dispatch) => {
    return axios.put(`reviews/${review_id}/helpful`)
      .catch(err => console.error('Unable to send review as helpful', err));
  };
};

export default helpfulReview;