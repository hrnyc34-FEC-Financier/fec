import React from 'react';
// import RelatedItemsContainer from '../containers/RelatedItems.jsx';
// import QuestionModule from './QuestionsAnswers/QuestionModule.jsx';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import './RatingsReviews/will-style.css';

const App = ({ teamName }) => {
  return (
    <div className='reviewsWidgetContainer'>
      < RatingsReviewsMain />
    </div>
  );
};

export default App;
