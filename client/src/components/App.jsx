import React from 'react';
// import RelatedItemsContainer from '../containers/RelatedItems.jsx';
// import QuestionModule from './QuestionsAnswers/QuestionModule.jsx';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
const App = ({ teamName }) => {
  return (
    <div className='container'>
      {/* <h1> Hello Team {teamName} ! </h1> */}
      <ProductDetailContainer />
      {/* <div className='RelatedItems'>
        RelatedItems
        <RelatedItemsContainer />
      </div>
      <div className='QuestionsAnswers'>
        {' '}
        QuestionsAnswers
        <QuestionModule />
      </div>
      <div className='RatingsReviews'> RatingsReviews</div> */}
    </div>
  );
};

export default App;
