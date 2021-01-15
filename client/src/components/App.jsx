import React from "react";
// import ProductDetailContainer from '../containers/ProductDetailContainer.jsx';

let App = ({ teamName }) => {

  return (
    <div class="container">
      <h1> Hello Team { teamName} ! </h1>
    <div class="ProductDetail">
    {/* <ProductDetailContainer /> */}
    ProductDetail</div>
    <div class="RelatedItems">RelatedItems </div>
    <div class="QuestionsAnswers"> QuestionsAnswers</div>
    <div class="RatingsReviews"> RatingsReviews</div>
    </div>
  );
}

export default App;