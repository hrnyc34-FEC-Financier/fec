import React from 'react';
import RelatedItemsContainer from '../containers/RelatedItems.jsx';
import QuestionModule from './QuestionsAnswers/QuestionModule.jsx';

const App = ({ teamName }) => {

  return (
    <div className = "container">
      <h1> Hello Team { teamName} ! </h1>
      <div className = "ProductDetail">ProductDetail</div>
      <div className = "RelatedItems">RelatedItems
        <RelatedItemsContainer />
      </div>
      <div className= "QuestionsAnswers"> QuestionsAnswers
        <QuestionModule />
      </div>
      <div className= "RatingsReviews"> RatingsReviews</div>
    </div>
  );
};

export default App;
