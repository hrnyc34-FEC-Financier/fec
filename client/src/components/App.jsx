import React, { useState } from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';

const App = ({ teamName }) => {
  return (
    <div>
      <div>
        <ProductDetailContainer />
      </div>
      <div id="container">
        <RelatedItemsContainer />
        <QAModuleContainer />
      </div>
      <div className="reviewsWidgetContainer">
        <RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
