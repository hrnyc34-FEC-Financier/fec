import React, { useState } from 'react';
import RatingsReviewsMain from './RatingsReviews/RatingsReviewsMain.jsx';
import RelatedItemsContainer from '../containers/RelatedItems/RelatedItems.js';
import QAModuleContainer from '../containers/QAContainers/QAModuleContainer.js';
// import './RatingsReviews/will-style.css';
import ProductDetailMain from '../components/ProductDetail/ProductDetailMain.jsx';
import Header from '../components/Header/Header.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <div id='pdcontainer'>
        <ProductDetailMain />
      </div>
      <>
        <RelatedItemsContainer />
      </>
      <div id="container">
        <QAModuleContainer/>
      </div>
      <div id='rContainer'>
        <RatingsReviewsMain />
      </div>
    </div>
  );
};

export default App;
