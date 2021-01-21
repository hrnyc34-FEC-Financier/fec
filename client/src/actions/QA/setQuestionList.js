import searchAPI from '../../lib/searchEngine.js';
import changeQuestionList from './questionList.js';

const setQuestionList = (product_id) => {
  return (dispatch) => {
    return searchAPI.get('qa/questions', {product_id, page: 1, count: 100})
      .then((data) => {
        dispatch(changeQuestionList(data.results));
      })
      .catch(err => console.error('Unable to get Questions Data', err));
  };
};

export default setQuestionList;