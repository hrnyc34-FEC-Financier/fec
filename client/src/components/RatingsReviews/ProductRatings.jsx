import React, { useState, useEffect } from 'react';

const ProductRatings = ({currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, ratingsFilter, handleProductRatingsChange}) => {
  useEffect(() => {
    handleProductRatingsChange(currentProductId);
  }, [currentProductId]);

  return (
    <div>
      <pre>{JSON.stringify(productRatings, null, 2)}</pre>
    </div>
  );
};

export default ProductRatings;