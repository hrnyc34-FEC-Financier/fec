import React, { useState } from 'react';
import StarBarList from './StarBarList.jsx';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';
import CharacteristicsList from './CharacteristicsList.jsx';
import ReviewModalContainer from '../../../containers/RatingsReviews/ReviewModalContainer.js';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/Modal';
//import '../reviewStyles/productRatings.css';

const ProductRatings = ({ productRatings, productRecommended, productCharacteristics, productAvgRating, productAvgStarRating, ratingsFilter, handleRatingsFilter, handleResetRatingsFilter}) => {

  const calculateProductRecommended = (productRecommended) => {
    if (Object.keys(productRecommended).length === 0) {
      return 0;
    }
    const recommendedTrue = Number(productRecommended[true]);
    const totalRecommended = recommendedTrue + Number(productRecommended[false]);
    return isNaN(totalRecommended) ? 0 : Math.floor(recommendedTrue / totalRecommended * 100);
  };

  const isRated = (productRatings) => {
    return !(Object.keys(productRatings).length === 0) && !(Object.values(productRatings).some(value => {
      value === null;
    }));
  };

  //handle modal review
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {isRated(productRatings) === false ? null : (
        <div id='productRatingsContainer'>
          <div id='productRatingsTitle'>RATINGS & REVIEWS</div>
          < div id='ratingNumberStarContainer'>
            <div id='productAvgRatingValue'>
              {productAvgRating % 1 === 0 ? `${productAvgRating}.0` : productAvgRating}
            </div>
            <div id='productStarRatingContainer'>
              <div id='productStarRating'>
                <StarRatingReadOnly productAvgStarRating={productAvgStarRating} />
              </div>
            </div>
          </div>
          <div id='productRecommended'>
            {`${calculateProductRecommended(productRecommended)}% of reviews recommend this product`}
          </div>
          <StarBarList productRatings={productRatings} ratingsFilter={ratingsFilter} handleRatingsFilter={handleRatingsFilter} handleResetRatingsFilter={handleResetRatingsFilter}/>
          <CharacteristicsList productCharacteristics={productCharacteristics} />
        </div>
      )}
      <button type='button' id='addReviewButton' onClick={handleOpen}>
        ADD A REVIEW +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Write New Review'
      >
        <div>
          <ReviewModalContainer handleClose={handleClose} ref={null}/>
        </div>
      </Modal>
    </div>
  );
};

export default ProductRatings;