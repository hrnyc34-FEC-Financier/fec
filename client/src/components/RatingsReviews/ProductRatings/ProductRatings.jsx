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

  // const isFilterMoreThanOne = (ratingsFilter) => {
  //   let count = 0;
  //   for (let star in ratingsFilter) {
  //     if (ratingsFilter[star] === true) {
  //       count++;
  //     }
  //     if (count > 1) {
  //       return true;
  //     }
  //   }
  //   return false;
  // };

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
      {/* {isFilterMoreThanOne(ratingsFilter) ? (
        <button id='resetFilterButton' onClick={handleResetRatingsFilter}>
          Reset Filter
        </button>
      ) : null} */}
      <CharacteristicsList productCharacteristics={productCharacteristics} />
    </div>
  );
};

export default ProductRatings;