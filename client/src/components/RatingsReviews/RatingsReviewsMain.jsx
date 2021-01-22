import React from 'react';
import ProductRatingsContainer from '../../containers/RatingsReviews/ProductRatingsContainer.js';
import ReviewsListContainer from '../../containers/RatingsReviews/ReviewsListContainer.js';
// import ReviewModalContainer from '../../containers/RatingsReviews/ReviewModalContainer.js';
import './reviewStyles/ratingsReviewsMain.css';
// import { makeStyles } from '@material-ui/core/Modal';
// import Modal from '@material-ui/core/Modal';
import ReviewModalContainer from './../../containers/RatingsReviews/ReviewModalContainer.js';

const RatingsReviewsMain = () => {
  return (
    <div className='ratingsReviewMain'>
      <ProductRatingsContainer />
      <ReviewsListContainer />
    </div>
    // <div>
    //   < ReviewModalContainer />
    // </div>
  );
};

export default RatingsReviewsMain;