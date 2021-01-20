import React from 'react';
import './characteristic.css';

const Characteristic = ({ characteristicData }) => {
  //characteristicInfo = [{characteristic: ['comfort, 3.5], characteristicInfo: {1: 'Uncomfortable, ...}}, {...}, ...]
  const characteristic = characteristicData.characteristic;
  const characteristicInfo = characteristicData.characteristicInfo;

  const checkIfPerfectAt3 = (characteristic) => {
    if (characteristic !== 'Comfort' && characteristic !== 'Quality') {
      return true;
    }
    return false;
  };

  const calculatePercent = (characteristicValue) => {
    return Math.floor(characteristicValue / 5 * 100);
  };

  return (
    <div className='charContainer'>
      <div className='charTitle'>{characteristic[0]}</div>
      <div className='charBarContainer'>
        {checkIfPerfectAt3(characteristic[0]) ? (
          <div className='charBarIntervalContainer'>
            <div className='charBar3Interval'></div>
            <div className='charBar3Interval'></div>
            <div className='charBar3Interval'></div>
          </div>
        ) : (
          <div className='charBarIntervalContainer'>
            <div className='charBar5Interval'></div>
            <div className='charBar5Interval'></div>
            <div className='charBar5Interval'></div>
            <div className='charBar5Interval'></div>
          </div>
        )}
        <div className='charBarPointerContainer'>
          <div className='charBarPointer' style={{left: `${calculatePercent(characteristic[1])}%`}}></div>
        </div>
      </div>

      <div className='charBarDescriptionContainer'>
        <div className='charBarDescription dFirst'>{characteristicInfo[1]}</div>
        <div className='charBarDescription dMiddle'>{characteristicInfo[3]}</div>
        <div className='charBarDescription dLast'>{characteristicInfo[5]}</div>
      </div>
    </div>
  );
};

export default Characteristic;