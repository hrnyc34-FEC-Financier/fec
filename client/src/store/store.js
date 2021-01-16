import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer.jsx';
import searchEngine from './lib/searchEngine.js';

let productList = [];
let currentProduct = {};
let currentStyleList = [];

let relatedProductList = [];

let reviewsList = [];
let productMetaData = {};

let questionsList = [];
let answersList = [];

searchEngine.get('products')
  .then(({ data }) => {
    productList = data;
    return searchEngine.get(`products/${productList[0].id}`);
  })
  .then(({ data }) => {
    currentProduct = data;
    return searchEngine.get(`products/${productList[0].id}/styles`);
  })
  .then(({ data }) => {
    currentStyleList = data.results;
    return searchEngine.get(`products/${productList[0].id}/related`);
  })
  .then(( {data }) => {
    relatedProductList = data;
    return searchEngine.get('reviews', {product_id: productList[0].id});
  })
  .then(({ data }) => {
    reviewsList = data.results;
    return searchEngine.get('reviews/meta', {product_id: productList[0].id});
  })
  .then(({ data }) => {
    productMetaData = data;
    return searchEngine.get('qa/questions', {product_id: productList[0].id});
  })
  .then(({ data }) => {
    questionList = data.results;
    //questionList carries the first 2 answers?
    answerList = questionList.map(question => {
      return {question_id, answers};
    });
  })
  .catch(err => console.error(err));

const states = {
  productList,
  currentProduct,
  currentStyleList,
  relatedProductList,
  reviewsList,
  productMetaData,
  questionsList,
  answersList,
};


const store = createStore(
  rootReducer,
  states,
  applyMiddleware( thunk )
);

export default store;