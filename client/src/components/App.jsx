import React from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
// import QuestionModule from './QuestionsAnswers/QuestionModule.jsx';

const App = ({ teamName }) => {
  return (
    <div className='container'>
      <ProductDetailContainer />
      <RelatedItemsContainer />
      {/* <div className='QuestionsAnswers'>
        {' '}
        QuestionsAnswers
        <QuestionModule />
      </div>
      <div className='RatingsReviews'> RatingsReviews</div> */}
    </div>
  );
};

export default App;
