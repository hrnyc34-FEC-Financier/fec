import React from 'react';
import StarBar from './StarBar.jsx';

const StarBarList = ({ productRatings, ratingsFilter, handleRatingsFilter }) => {

  const starArr = [];
  let totalReviews = 0;

  for (let i = 0; i < 5; i++) {
    productRatings.hasOwnProperty(i + 1) ? starArr.push(Number(productRatings[i + 1])) : starArr.push(0);
    totalReviews += starArr[i];
  }

  return (
    <div id='starBarsContainer'>
      {starArr.reverse().map((star, i) => {
        return (
          <StarBar key={`${5 - i}star`} star={5 - i} starBarValue={Math.floor((star / totalReviews) * 100)} ratingsFilter={ratingsFilter} handleRatingsFilter={handleRatingsFilter} />
        );
      })}
    </div>
  );
};

export default StarBarList;