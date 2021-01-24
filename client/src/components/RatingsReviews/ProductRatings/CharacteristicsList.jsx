import React from 'react';
import CharacteristicBar from './CharacteristicBar.jsx';
import createCharacteristicsArray from './characteristicsHelpers.js';

const CharacteristicsList = ({ productCharacteristics }) => {
  return (
    //createCharacteristicsArray: [ {characteristic: ['comfort', 3.5], characteristicInfo: {1: 'Uncomfortable, ...} }, ...]
    createCharacteristicsArray(productCharacteristics, 'rating').map((characteristicData, i) => {
      return <CharacteristicBar key={`characteristic${i}`} characteristicData={characteristicData} />;
    })
  );
};

export default CharacteristicsList;