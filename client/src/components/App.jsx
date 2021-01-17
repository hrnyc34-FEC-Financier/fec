import React from "react";
import QuestionModule from "./QuestionsAnswers/QuestionModule.jsx";



let App = ({ teamName }) => {

  return (
    <div id = "container">
      <h1> Hello Team { teamName} ! </h1>
      <div className = "ProductDetail">ProductDetail</div>
      <div className = "RelatedItems">RelatedItems
      </div>
      <QuestionModule />
      <div className= "RatingsReviews"> RatingsReviews</div>
    </div>
  )
}

export default App;
