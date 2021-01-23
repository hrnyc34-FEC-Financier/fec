import searchAPI from '../../lib/searchEngine.js';

const postReview = (review) => {
  return (dispatch) => {
    return searchAPI.post('reviews', review)
      .then(() => console.log('Review has been posted'))
      .catch((err) => console.error('Unable to post Review:', err));
  };
};

export default postReview;