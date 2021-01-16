import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';

// searchEngine.get('products')
//   .then(({ data }) => {
//     productList = data;
//     return searchEngine.get(`products/${productList[0].id}`);
//   })
//   .then(({ data }) => {
//     currentProduct = data;
//     return searchEngine.get(`products/${productList[0].id}/styles`);
//   })
//   .then(({ data }) => {
//     currentStyleList = data.results;
//     return searchEngine.get(`products/${productList[0].id}/related`);
//   })
//   .then(( {data }) => {
//     relatedProductList = data;
//     return searchEngine.get('reviews', {product_id: productList[0].id});
//   })
//   .then(({ data }) => {
//     reviewsList = data.results;
//     return searchEngine.get('reviews/meta', {product_id: productList[0].id});
//   })
//   .then(({ data }) => {
//     productMetaData = data;
//     return searchEngine.get('qa/questions', {product_id: productList[0].id});
//   })
//   .then(({ data }) => {
//     questionList = data.results;
//     //questionList carries the first 2 answers?
//     answerList = questionList.map(question => {
//       return {question_id, answers};
//     });
//   })
//   .catch(err => console.error(err));

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
