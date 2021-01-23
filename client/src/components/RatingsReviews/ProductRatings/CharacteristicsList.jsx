import React from 'react';
import Characteristic from './Characteristic.jsx';
import { characteristicsMap, createCharacteristicsArray } from './characteristicsHelpers.js';

const CharacteristicsList = ({ productCharacteristics }) => {
  return (
    //createCharacteristicsArray: [{characteristic: ['comfort, 3.5], characteristicInfo: {1: 'Uncomfortable, ...}}, {...}, ...]
    createCharacteristicsArray(productCharacteristics, 'rating').map((characteristicData, i) => {
      return <Characteristic key={`characteristic${i}`} characteristicData={characteristicData} />;
    })
  );
};

export default CharacteristicsList;