import searchAPI from '../../lib/searchEngine.js';

const helpfulReview = (review_id) => {
  return (dispatch) => {
    return searchAPI.put(`reviews/${review_id}/helpful`)
      .catch(err => console.error('Unable to send review as helpful', err));
  };
};

export default helpfulReview;