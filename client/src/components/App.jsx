import React from 'react';
import QuestionModule from "./QuestionsAnswers/QuestionModule.jsx";
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js'

const App = ({ teamName }) => {
  return (
    <div id = "container">
      <ProductDetailContainer />
      <div className = "RelatedItems">RelatedItems
      </div>
      <QAModuleContainer />
      <RatingsReviewsMain />




    </div>
  );
};

export default App;
