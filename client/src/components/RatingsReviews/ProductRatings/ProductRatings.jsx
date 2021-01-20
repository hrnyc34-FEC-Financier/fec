import React from 'react';
import StarBarList from './StarBarList.jsx';
import StarRatingReadOnly from './StarRatingReadOnly.jsx';
import CharacteristicsList from './CharacteristicsList.jsx';
import './ProductRatings.css';

const ProductRatings = ({ currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, productAvgStarRating, ratingsFilter }) => {

  const calculateProductRecommended = (productRecommended) => {
    const recommended = Number(productRecommended[true]);
    const total = recommended + Number(productRecommended[false]);
    return Math.floor(recommended / total * 100);
  };

  return (
    <div>
      <div id='productRatingsTitle'>RATINGS & REVIEWS</div>
      <div id='ratingNumberContainer'>
        {productAvgRating}
      </div>
      <div>
        <StarRatingReadOnly productAvgStarRating={productAvgStarRating} />
      </div>
      <div>
        {`${calculateProductRecommended(productRecommended)}% of reviews recommend this product`}
      </div>
      <StarBarList productRatings={productRatings} />
      <CharacteristicsList productCharacteristics={productCharacteristics} />
    </div>
  );
};

export default ProductRatings;