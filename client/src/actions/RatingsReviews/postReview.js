import searchAPI from '../../lib/searchEngine.js';

const postReview = (product_id, reviewInfo) => {
  const review = {
    product_id: product_id,
    rating: reviewInfo.rating,
    summary: reviewInfo.summary,
    body: reviewInfo.body,
    recommend: reviewInfo.recommend,
    name: reviewInfo.name,
    email: reviewInfo.email,
    characteristics: reviewInfo.characteristics,
    photos: ['asdasd', 'asdasd']
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