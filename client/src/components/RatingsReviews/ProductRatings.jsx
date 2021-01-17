import React, { useState, useEffect } from 'react';

const ProductRatings = ({currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, ratingsFilter, handleProductRatingsChange, changeProductAvgRating}) => {


  // ( Number(productRatings['1']) + (Number(productRatings['2'] * 2)) + (Number(productRatings['3']) * 3) + (Number(productRatings['4']) * 4) + (Number(productRatings['5']) * 5) );

  if (currentProductId !== '') {
    useEffect(() => {
      handleProductRatingsChange(currentProductId);
      productAvgRating = 10;
      changeProductAvgRating(productAvgRating);
    }, [currentProductId]);
  }

  // console.log('productRatings', productRatings);
  // console.log('productRecommended', productRecommended);
  // console.log('productCharacteristics', productCharacteristics);
  console.log(productAvgRating);


  return (
    <div>
      <pre>{JSON.stringify(productRatings, null, 2)}</pre>
      <pre>{JSON.stringify(productRecommended, null, 2)}</pre>
      <pre>{JSON.stringify(productCharacteristics, null, 2)}</pre>
    </div>
  );
};

export default ProductRatings;