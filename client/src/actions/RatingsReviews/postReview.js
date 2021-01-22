import searchAPI from '../../lib/searchEngine.js';

const postReview = (product_id, reviewInfo) => {
  const review = {
    rating: reviewInfo.ratingState,
    summary: reviewInfo.summaryState,
    body: reviewInfo.bodyState,
    recommend: reviewInfo.recommendState,
    name: reviewInfo.nameState,
    email: reviewInfo.emailState,
    characteristics: reviewInfo.characteristicsState
  };

  return (dispatch) => {
    return searchAPI.post('reviews', {product_id, reviewInfo})
      .then(() => {
        console.log('Posted Review')
      })
      .catch((err) => console.error('Unable to post Review:', err));
  };
};

export default postReview;

// reviewRating: state.reviewRating,
// reviewSummary: state.reviewSummary,
// reviewBody: state.reviewBody,
// reviewPhotos: state.reviewPhotos,
// reviewRecommendation: state.reviewRecommendation,
// reviewUser: state.reviewUser,
// reviewEmail: state.reviewEmail,