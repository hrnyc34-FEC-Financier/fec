import React from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';

const App = ({ teamName }) => {
  return (
    <div>
      <ProductDetailContainer />
      <RelatedItemsContainer />
      <QAModuleContainer />
      <div className='reviewsWidgetContainer'>
        <RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
