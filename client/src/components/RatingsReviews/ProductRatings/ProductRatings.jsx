import React from 'react';
import StarBarList from './StarBarList.jsx';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';
import CharacteristicsList from './CharacteristicsList.jsx';
import '../reviewStyles/productRatings.css';

const ProductRatings = ({ currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, productAvgStarRating, ratingsFilter, handleRatingsFilter, handleResetRatingsFilter}) => {

  const calculateProductRecommended = (productRecommended) => {
    const recommended = Number(productRecommended[true]);
    const total = recommended + Number(productRecommended[false]);
    return Math.floor(recommended / total * 100);
  };

  return (
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
  );
};

export default ProductRatings;