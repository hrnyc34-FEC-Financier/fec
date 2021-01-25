import React, { useState } from 'react';
import StarRatingReadOnly from '../ProductRatings/StarRatingReadOnly.jsx';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ImageModal from './ImageModal.jsx';

const ReviewTile = ({ currentProductId, reviewInfo, handleHelpfulReview, handleReportReview }) => {

  const convertDate = (ISOStringDate) => {
    const date = new Date(reviewInfo.date);
    const month = date.toLocaleString('en', {month: 'long', timeZone: 'UTC'});
    const day = reviewInfo.date[8] === '0' ? reviewInfo.date.slice(9, 10) : reviewInfo.date.slice(8, 10);
    const year = reviewInfo.date.slice(0, 4);
    return `${month} ${day}, ${year}`;
  };

  const [reviewHelpful, setReviewHelpful] = useState({helpfulness: reviewInfo.helpfulness, helpfulStatus: false});
  const [reviewReported, setReviewReported] = useState(false);

  //related to the modal image
  const [modalImage, setModalImage] = useState('');
  const [openI, setOpenI] = useState(false);
  const handleOpen = (e) => {
    setModalImage(e.target.attributes.src.value);
    setOpenI(true);
  };
  const handleClose = () => setOpenI(false);

  return (
    <div className='reviewTile'>
      <div className='reviewTileHeader'>
        <div className='reviewTileStarRating'>
          <StarRatingReadOnly productAvgStarRating={reviewInfo.rating} />
        </div>
        <div className='reviewTileUserDate'>
          {`${reviewInfo.reviewer_name}, ${convertDate(reviewInfo.date)}`}
        </div>
      </div>
      <div className='reviewTileSummary'>{reviewInfo.summary}</div>
      <div className='reviewTileBody'>{reviewInfo.body}</div>
      <div className='reviewTilePhotoContainer'>
        {reviewInfo.photos.slice(0, 5).map((photo, i) => {
          return <img key={`reviewTileImage${i}`} src={photo.url} className='reviewTileImage' onClick={handleOpen}></img>;
        })}
      </div>
      {reviewInfo.recommend === true ? (
        <div className='reviewTileRecommendContainer'>
          <div className='reviewTileRecommendIcon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-check2-circle'
              viewBox='0 0 16 16'
            >
              <path d='M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z' />
              <path d='M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z' />
            </svg>
          </div>
          <div className='reviewTileRecommendText'>
            I recommend this product.
          </div>
        </div>
      ) : null}
      {reviewInfo.response === null || reviewInfo.response === '' ? null : (
        <div className='reviewTileFeedback'>
          <div className='reviewTileFeedbackHeader'>Response:</div>
          <div className='reviewTileFeedbackResponse'>{reviewInfo.response}</div>
        </div>
      )}
      <div className='reviewTileFooterContainer'>
        <div className='reviewTileFooter'>
          <span className='reviewTileFooterHelpful'>
            Helpful?{' '}
            <span className='reviewTileFooterHelpfulStatus'
              onClick={() => {
                if (reviewHelpful.helpfulStatus === false) {
                  setReviewHelpful({helpfulness: reviewHelpful.helpfulness + 1, helpfulStatus: true});
                  handleHelpfulReview(reviewInfo.review_id);
                }
              }}
            >
              Yes ({reviewHelpful.helpfulness})
            </span>
          </span>
          <span className='reviewTileFooterDivider'>|</span>
          <span className='reviewTileFooterReport'
            onClick={() => {
              if (reviewReported === false) {
                setReviewReported(true);
                handleReportReview(currentProductId, reviewInfo.review_id);
              }
            }}
          >
            {reviewReported === false ? 'Report' : 'Reported'}
          </span>
        </div>
      </div>
      <div className='reviewTileEndLine'></div>
      <Modal open={openI} onClose={handleClose} onClick={handleClose}>
        <Fade in={openI}>
          <div id='modalContainer'>
            <ImageModal imageSrc={modalImage} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ReviewTile;