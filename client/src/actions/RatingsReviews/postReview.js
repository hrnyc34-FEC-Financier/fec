import searchAPI from '../../lib/searchEngine.js';

const postReview = (e, product_id, reviewInfo) => {
  e.preventDefault();
  const review = {
    product_id: product_id,
    rating: reviewInfo.rating,
    summary: reviewInfo.summaryState,
    body: reviewInfo.bodyState,
    recommend: reviewInfo.recommendState,
    name: reviewInfo.nameState,
    email: reviewInfo.emailState,
    characteristics: reviewInfo.characteristicsState,
    photos: []
  };

  console.log(review)
  return (dispatch) => {
    return searchAPI.post('reviews', review)
      .then(() => {
        console.log('Review has been posted');
      })
      .catch((err) => console.error('Unable to post Review:', err));
  };
};

export default postReview;