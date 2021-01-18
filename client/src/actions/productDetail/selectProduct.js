import { current } from 'immer';
import searchAPI from '../../lib/searchEngine.js';
import changeProduct from './currentProduct.js';
import changeProductId from './currentProductId.js';
import setSelectedStyle from './selectStyle.js';
import changeStyleList from './currentStyleList.js';
import setReviewsList from '../RatingsReviews/setReviewsList.js';
import setRatings from '../RatingsReviews/setRatings.js';
import setQuestionList from '../QA/setQuestionList';
import changeQuestionList from '../QA/questionList.js';

const setSelectedProduct = (product_id) => {
  return (dispatch) => {
    return searchAPI
      .get(`products/${product_id}`)
      .then(({ data }) => {
        dispatch(changeProduct(data));
        dispatch(changeProductId(data.id));
        dispatch(setReviewsList(product_id));
        dispatch(setRatings(product_id));
      })
      .then(() => {
        return searchAPI.get(`products/${product_id}/styles`);
      })
      .then(({ data }) => {
        dispatch(changeStyleList(data.results));
        dispatch(setSelectedStyle(data.results[0]));
      })
      .then(() => {
        return searchAPI.get(`qa/questions`, { product_id });
      })
      .then(({data}) => {
        dispatch(changeQuestionList(data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default setSelectedProduct;
