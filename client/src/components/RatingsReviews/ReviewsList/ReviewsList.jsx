import React, { useState } from 'react';
import SortOptions from './SortOptions.jsx';
import ReviewTile from './ReviewTile.jsx';
import ReviewModalContainer from '../../../containers/RatingsReviews/ReviewModalContainer.js';
import { makeStyles } from '@material-ui/core/Modal';
import Modal from '@material-ui/core/Modal';
import '../reviewStyles/reviewsList.css';

const ReviewsList = ({ currentProductId, ratingsFilter, productRatings, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewImageModal, reviewScroll, reviewSort, handleHelpfulReview, handleReportReview, handleSortSelect }) => {

  // const [open, setOpen] = React.useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const [ratingsFilterList, setRatingsFilterList] = useState({});

  // ratingsFilter initial state: {1: false, 2: false, 3: false, 4: false, 5: false}

  const filteredReviewsList = [];
  for (let review of reviewsList) {
    if (ratingsFilter.hasOwnProperty(review.rating) && ratingsFilter[review.rating] === true) {
      filteredReviewsList.push(review);
    }
  }

  const calculateTotalReviews = (productRatings) => {
    let totalReviews = 0;
    for (let star in productRatings) {
      totalReviews += Number(productRatings[star]);
    }
    return totalReviews;
  };

  return (
    <div>
      {reviewsList.length === 0 ? null : (
        <div className='reviewsListContainer'>
          <div className='reviewsListHeaderContainer'>
            <span className='reviewsListHeaderText'>{`${filteredReviewsList.length > 0 ? filteredReviewsList.length : reviewsList.length} review${filteredReviewsList.length > 1 ? 's' : ''}, sorted by`}</span>
            <span>
              <SortOptions currentProductId={currentProductId} reviewSort={reviewSort} handleSortSelect={handleSortSelect} />
            </span>
          </div>
          <div className='reviewsList'>
            {filteredReviewsList.length === 0 ? reviewsList.map(reviewInfo => {
              return <ReviewTile key={`reviewTile${reviewInfo.review_id}`} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview} />;
            }) : (
              filteredReviewsList.map(reviewInfo => {
                return <ReviewTile key={`reviewTile${reviewInfo.review_id}`} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview}/>;
              })
            )}
          </div>
          <button>MORE REVIEWS</button>
        </div>
      )}
    </div>
  );
};

export default ReviewsList;

// <button type='button' onClick={handleOpen}>
//   ADD A REVIEW +
// </button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby='Write New Review'
// >
//   <div>
//     <ReviewModalContainer close={handleClose} ref={null}/>
//   </div>
// </Modal>