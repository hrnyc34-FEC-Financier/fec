import React, { useState } from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';



const App = ({ teamName }) => {
  return (
    <div>
      <ProductDetailContainer />
      <div id="container">
      <RelatedItemsContainer />
      <QAModuleContainer/>
      <div className='reviewsWidgetContainer'>
        < RatingsReviewsMain />
      </div>
    </div>
    </div>
  );
};

export default App;
