import React, { useState, useEffect } from 'react';

const ProductRatings = ({currentProductId, productRatings, productRecommended, productCharacteristics, productAvgRating, ratingsFilter, handleProductRatingsChange, changeProductAvgRating}) => {


  // ( Number(productRatings['1']) + (Number(productRatings['2'] * 2)) + (Number(productRatings['3']) * 3) + (Number(productRatings['4']) * 4) + (Number(productRatings['5']) * 5) );

  // if (currentProductId !== '') {
  //   useEffect(() => {
  //     handleProductRatingsChange(currentProductId);
  //     //should change productAvgRating on when currentProductId changes and after handleProductRatingsChange function is performed
  //     //how to wait until after handleProductRatingsChange
  //     // const calculateProductAvgRating = (productRatings) => {
  //     //   const oneStar = productRatings['1'] ? Number(productRatings['1']) : 0;
  //     //   const twoStar = productRatings['2'] ? Number(productRatings['2']) : 0;
  //     //   const threeStar = productRatings['3'] ? Number(productRatings['3']) : 0;
  //     //   const fourStar = productRatings['4'] ? Number(productRatings['4']) : 0;
  //     //   const fiveStar = productRatings['5'] ? Number(productRatings['5']) : 0;
  //     //   return oneStar + twoStar + threeStar + fourStar + fiveStar;
  //     // };
  //     // changeProductAvgRating(calculateProductAvgRating(productRatings));
  //   }, [currentProductId]);
  // }



  // console.log('productRatings', productRatings);
  // console.log('productRecommended', productRecommended);
  // console.log('productCharacteristics', productCharacteristics);
  // console.log(productAvgRating);


  return (
    <div>
      <pre>{JSON.stringify(productRatings, null, 2)}</pre>
      <pre>{JSON.stringify(productRecommended, null, 2)}</pre>
      <pre>{JSON.stringify(productCharacteristics, null, 2)}</pre>
    </div>
  );
};

export default ProductRatings;