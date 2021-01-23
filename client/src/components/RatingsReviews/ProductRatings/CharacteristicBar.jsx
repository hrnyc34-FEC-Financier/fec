import React from 'react';
import '../reviewStyles/characteristic.css';

const CharacteristicBar = ({ characteristicData }) => {

  const characteristic = characteristicData.characteristic;
  const characteristicInfo = characteristicData.characteristicInfo;

  const checkIfPerfectAt3 = (characteristic) => {
    return characteristic !== 'Comfort' && characteristic !== 'Quality' ? true : false;
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
            <div className='charBar4Interval'></div>
            <div className='charBar4Interval'></div>
            <div className='charBar4Interval'></div>
            <div className='charBar4Interval'></div>
          </div>
        )}
        <div className='charBarPointerContainer'>
          <div className='charBarPointer' style={{left: `${calculatePercent(characteristic[1])}%`}}></div>
        </div>
      </div>

      <div className='charBarDescriptionContainer'>
        <div className='charBarDescription dFirst'>{characteristicInfo[0]}</div>
        <div className='charBarDescription dMiddle'>{characteristicInfo[2]}</div>
        <div className='charBarDescription dLast'>{characteristicInfo[4]}</div>
      </div>
    </div>
  );
};

export default CharacteristicBar;