import React from 'react';
import StarBar from './StarBar.jsx';

const StarBarList = ({ productRatings, ratingsFilter, handleRatingsFilter, handleResetRatingsFilter }) => {

  const starArr = [];
  let totalReviews = 0;

  for (let i = 5; i >= 1; i--) {
    productRatings.hasOwnProperty(i) ? starArr.push(Number(productRatings[i])) : starArr.push(0);
    totalReviews += starArr[5 - i];
  }

  const isMoreThanOneFilter = (ratingsFilter) => {
    let count = 0;
    // Object.values(ratingsFilter).forEach(ratingValue => {
    //   if (ratingValue === true) {
    //     count++;
    //   }
    // });

    for (let star in ratingsFilter) {
      if (ratingsFilter[star] === true) {
        count++;
      }
      if (count > 1) {
        return true;
      }
    }
    return false;
  };

  return (
    <div id='starBarsContainer'>
      {starArr.map((star, i) => {
        return (
          <StarBar key={`${5 - i}star`} star={5 - i} starBarValue={Math.floor((star / totalReviews) * 100)} filtered={ratingsFilter[5 - i]} handleRatingsFilter={handleRatingsFilter} />
        );
      })}
      <div id='resetFilterButtonContainer'>
        {isMoreThanOneFilter(ratingsFilter) ? (
          <button id='resetFilterButton' onClick={handleResetRatingsFilter}>
            Reset Filter
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default StarBarList;