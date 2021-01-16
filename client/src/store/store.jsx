import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/rootReducer.jsx';

const states = {
  // productList: {},
  // currentProduct: {},
  // productStyleList: [],
  // currentStyle: {},
  // currentSize: '',
  // currentQuantity: 0,
  // cart: [],
  // view: {},
  // currentImage: '',
  // thumbGallery: [],
  // zoomImage: false,
  // reviewsList: [],
  // reviewDisplayLimiter: 0,
  // reviewScroll: false,
  // reviewImageModal: false,
  // reviewHelpful: [],
  // reviewReport: 0,
  // reviewFeedback: false,
  // currentSort: '',
  // productRatings: {},
  // ratingsFilter: {},
  // productRecommended: {},
  // characteristics: {},
  // reviewModal: false,
  // reviewRating: 0,
  // reviewRecommendation: false,
  // reviewSummary: '',
  // reviewBody: '',
  // reviewWordCount: 0,
  // reviewPhotos: [],
  // reviewUser: '',
  // reviewEmail: '',
  // questionsAnswersList: [],
  // answersList: [],
  // answerHelpful: [],
  // answerReported: false,
  // answerExpand: false,
  // questionHelpful: 0,
  // questionReported: false,
  // questionSearch: '',
  // questionDisplayLimiter: 0,
  // questionScroll: false,
  // questionModal: false,
  // questionBody: '',
  // questionUser: '',
  // questionEmail: '',
  // answerModal: false,
  // answerBody: '',
  // answerUser: '',
  // answerEmail: '',
  // answerPhotos: [],
  relatedProductList: [],
  // relatedProductCarouselList: [],
  // relatedProductStarModal: false,
  // yourOutfitList:[]
};


const store = createStore(
  rootReducer,
  states,
  applyMiddleware( thunk )
);
export default store;