import React from 'react';
import Characteristic from './Characteristic.jsx';

const CharacteristicsList = ({ productCharacteristics }) => {
  const characteristicsMap = [
    [ 'Size', {1: 'A size too small', 2: '1/2 a size too small', 3: 'Perfect', 4: '1/2 a size too big', 5: 'A size too wide'} ],
    [ 'Width', {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'} ],
    [ 'Comfort', {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comfortable', 5: 'Perfect'} ],
    [ 'Quality', {1: 'Poor', 2: 'Below average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'} ],
    [ 'Length', {1: 'Runs Short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'} ],
    [ 'Fit', {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'} ]
  ];

  const characteristicsArray = [];
  for (let i = 0; i < characteristicsMap.length; i++) {
    const characteristic = characteristicsMap[i][0];
    const characteristicInfo = characteristicsMap[i][1];
    //will handle cases where a product's characteristic property is set to null
    if (productCharacteristics.hasOwnProperty(characteristic) && productCharacteristics[characteristic].value !== null) {
      const characteristicValue = Number(productCharacteristics[characteristic].value.slice(0, 3));
      characteristicsArray.push({ [characteristic]: characteristicValue, characteristicInfo });
    }
  }
  //Sample characteristicArray: [{Comfort: 3.5, characteristicInfo: {1: 'Uncomfortable, 2: 'Slightly uncomfortable, ...}}, {Quality: 4, ...} ]
  // console.log(characteristicsArray);
  //condiftional: if Size, Width, Length, Fit use CenterCharacteristic, else Comfort, Quality use RightCharacteristic
  return (
    characteristicsArray.map((characteristicInfo, i) => {
      return <Characteristic key={`characteristic${i}`} characteristicInfo={characteristicInfo} />;
    })
  );
};

export default CharacteristicsList;