import React from 'react';
import Characteristic from './Characteristic.jsx';
import { characteristicsMap, createCharacteristicsArray } from './characteristicsHelpers.js';

const CharacteristicsList = ({ productCharacteristics }) => {

  //characteristicArray: [{characteristic: ['comfort, 3.5], characteristicInfo: {1: 'Uncomfortable, ...}}, {...}, ...]
  return (
    createCharacteristicsArray(productCharacteristics).map((characteristicData, i) => {
      return <Characteristic key={`characteristic${i}`} characteristicData={characteristicData} />;
    })
  );
};

export default CharacteristicsList;

