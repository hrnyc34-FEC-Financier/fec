import React, { useState, useEffect } from 'react';

const ProductRatings = ({currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, ratingsFilter, handleProductRatingsChange}) => {

  if (currentProductId !== '') {
    useEffect(() => {
      handleProductRatingsChange(currentProductId);
    }, [currentProductId]);
  }

  // console.log('productRatings', productRatings);
  // console.log('productRecommended', productRecommended);
  // console.log('productCharacteristics', productCharacteristics);



  return (
    <div>
      <pre>{JSON.stringify(productRatings, null, 2)}</pre>
      <pre>{JSON.stringify(productRecommended, null, 2)}</pre>
      <pre>{JSON.stringify(productCharacteristics, null, 2)}</pre>
    </div>
  );
};

export default ProductRatings;