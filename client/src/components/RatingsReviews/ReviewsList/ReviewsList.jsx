import React from 'react';
import SortOptions from './SortOptions.jsx';
import ReviewTile from './ReviewTile.jsx';
import ReviewModalContainer from '../../../containers/RatingsReviews/ReviewModalContainer.js';
import { makeStyles } from '@material-ui/core/Modal';
import Modal from '@material-ui/core/Modal';

const ReviewsList = ({ currentProductId, productRatings, reviewsList, reviewDisplayLimiter, reviewFeedback, reviewImageModal, reviewScroll, reviewSort, handleHelpfulReview, handleReportReview, handleSortSelect }) => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const calculateTotalReviews = (productRatings) => {
    let totalReviews = 0;
    for (let star in productRatings) {
      totalReviews += Number(productRatings[star]);
    }
    return totalReviews;
  };

  return (
    <div>
      <div className='reviewsListHeader'>
        {`${calculateTotalReviews(productRatings)} reviews, sorted by `}
        <span>
          <SortOptions currentProductId={currentProductId} reviewSort={reviewSort} handleSortSelect={handleSortSelect} />
        </span>
      </div>
      <div className='reviewsList'>
        {reviewsList.map(reviewInfo => {
          return <ReviewTile key={`reviewTile${reviewInfo.review_id}`} currentProductId={currentProductId} reviewInfo={reviewInfo} handleHelpfulReview={handleHelpfulReview} handleReportReview={handleReportReview}/>;
        })}
      </div>
      <button>MORE REVIEWS</button>
      <button type='button' onClick={handleOpen}>
        ADD A REVIEW +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Write New Review'
      >
        <div>
          <ReviewModalContainer />
        </div>
      </Modal>
    </div>
  );
};

export default ReviewsList;