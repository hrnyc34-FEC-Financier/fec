import React from 'react';

const CharacteristicsRadio = ({ characteristic, handleCharacteristicsChange }) => {
  const characteristicInfo = characteristic.characteristicInfo;
  return (
    <form className='radioForm'>
      <div className='radioTitle'>
        {characteristic.characteristic[0]}
      </div>
      <div className='radioContainer'>
        {characteristicInfo.map((info, i) => {
          return (
            //createCharacteristicsArray: {characteristic: ['comfort', 12554], characteristicInfo: {1: 'Uncomfortable, ...}
            <div className='radioButton' key={`${characteristic.characteristic[0]}${i}`}>
              <input type='radio' name={characteristic.characteristic[1]} value={i + 1} onChange={(e) => handleCharacteristicsChange(e)}/>
              <div className='radioButtonDescription'>{info}</div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default CharacteristicsRadio;