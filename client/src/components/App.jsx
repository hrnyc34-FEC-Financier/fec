import React, { useState } from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';
import './RatingsReviews/will-style.css';


const App = ({ teamName }) => {
  return (
    <div>
      <div id="pdcontainer">
        <ProductDetailContainer />
      </div>
      <div id="container">
        <RelatedItemsContainer />
        <QAModuleContainer/>
      </div>
      <div id='rContainer'>
        <RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
