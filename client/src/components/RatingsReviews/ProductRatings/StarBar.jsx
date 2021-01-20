import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const StarBar = ({ star, starRatingValue }) => {
  return (
    <div className='starBarContainer'>
      <div>{`${star} stars`}</div>
      <div className='starRatingBar'>
        <ProgressBar
          completed={starRatingValue}
          labelSize='0px'
          borderRadius='0'
          bgcolor='rgb(0, 194, 129)'
          baseBgColor='rgb(200, 200, 200)'
          height='10px' />
      </div>
    </div>
  );
};

export default StarBar;