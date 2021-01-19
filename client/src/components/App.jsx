import React from 'react';
import ProductDetailContainer from '../containers/productDetails/ProductDetailContainer.js';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';
import './RatingsReviews/will-style.css';

const App = ({ teamName }) => {
  return (
    <div>
    {/* <div className='container'> */}
      <ProductDetailContainer />
      <RelatedItemsContainer />
      <QAModuleContainer />
      <div className='reviewsWidgetContainer'>
        < RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
