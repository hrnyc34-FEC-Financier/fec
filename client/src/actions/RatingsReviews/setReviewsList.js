import searchAPI from '../../lib/searchEngine.js';
import changeReviewsList from './reviewsList/reviewsList.js';

const setReviews = (product_id, count = 25) => {
  return (dispatch) => {
    return searchAPI.get('reviews', {product_id, count})
      .then(({ data }) => {
        dispatch(changeReviewsList(data.results));
      })
      .catch(err => console.error('Unable to get Reviews Data', err));
  };
};

export default setReviews;

// API Query Parameters
// parameter       type     description
// page            int      default 1. Selects the page of results to return
// count           int      default 5. Specifies how many results per page to return
// sort            text     changes sort order based on 'newest', 'helpful', 'relevant'
// product_id      int      specifies the product for which to retrieve reviews