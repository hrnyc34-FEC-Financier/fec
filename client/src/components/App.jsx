import React from "react";
import QuestionModule from "./QuestionsAnswers/QuestionModule.jsx";
import RelatedItemsContainer from '../containers/RelatedItems.jsx';


let App = ({ teamName }) => {

  return (
    <div className = "container">
      <h1> Hello Team { teamName} ! </h1>
      <div className = "ProductDetail">ProductDetail</div>
      <div className = "RelatedItems">RelatedItems
      </div>
      <div className= "QuestionsAnswers">
      <QuestionModule />
      </div>
      <div className= "RatingsReviews"> RatingsReviews</div>
    </div>
  )
}


export default App;