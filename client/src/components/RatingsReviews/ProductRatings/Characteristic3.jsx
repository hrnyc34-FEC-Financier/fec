import React from 'react';
import './characteristic.css';

const Characteristic3 = ({ characteristicInfo }) => {
  console.log(characteristicInfo);
  return (
    <div className='charContainer'>
      <div className='charTitle'>{characteristicInfo.characteristic[0]}</div>
      <div className='charBarContainer'>
        <div className='charBar3IntervalContainer'>
          <div className='charBar3Interval'></div>
          <div className='charBar3Interval'></div>
          <div className='charBar3Interval'></div>
        </div>
        <div className='charBarPointer'></div>
      </div>
      <div className='charBarDescriptionContainer'>
        <div className='charBarDescription dFirst'>{characteristicInfo.characteristicInfo[1]}</div>
        <div className='charBarDescription dMiddle'>{characteristicInfo.characteristicInfo[3]}</div>
        <div className='charBarDescription dLast'>{characteristicInfo.characteristicInfo[5]}</div>
      </div>
    </div>
  );
};

export default Characteristic3;