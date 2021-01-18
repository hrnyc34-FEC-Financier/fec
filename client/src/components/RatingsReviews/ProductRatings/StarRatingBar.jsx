import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const StarRatingBar = ({ star, starRatingValue }) => {
  return (
    <div className='starBarContainer'>
      <div>{`${star} stars`}</div>
      <div className='starRatingBar'>
        <ProgressBar
          completed={starRatingValue}
          labelSize='0px'
          borderRadius='0'
          bgcolor='rgb(0, 194, 129)'
          baseBgColor='#767676'
          height='10px' />
      </div>
    </div>
  );
};

export default StarRatingBar;