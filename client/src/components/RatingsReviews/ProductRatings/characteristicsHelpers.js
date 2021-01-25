const createCharacteristicsArray = (productCharacteristics, inputRatingOrId) => {
  //productCharacteristics { Size: { id: 14, value: '4.000' }, Width: { id: 15, value: null}, ... }
  //inputRatingOrId = 'rating' or 'id'
  const characteristicsMap = [
    ['Size', ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide']],
    ['Width', ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']],
    ['Comfort', ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']],
    ['Quality', ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']],
    ['Length', ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']],
    ['Fit', ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']],
  ];

  const characteristicsArray = [];
  for (let i = 0; i < characteristicsMap.length; i++) {
    const characteristic = characteristicsMap[i][0];
    const characteristicInfo = characteristicsMap[i][1];
    if (inputRatingOrId === 'rating') {
      //will handle cases where a product's characteristic value property is set to null
      if (productCharacteristics.hasOwnProperty(characteristic) && productCharacteristics[characteristic].value !== null) {
        const characteristicValue = Number(productCharacteristics[characteristic].value.slice(0, 3));
        characteristicsArray.push({ characteristic: [characteristic, characteristicValue], characteristicInfo });
        // [{characteristic: [characteristic, characteristicValue], characteristicInfo: ['A size too small', '1/2 a size too small, ...]}]
      }
    } else if (inputRatingOrId === 'id') {
      if (productCharacteristics.hasOwnProperty(characteristic)) {
        const characteristicId = Number(productCharacteristics[characteristic].id);
        characteristicsArray.push({characteristic: [characteristic, characteristicId], characteristicInfo});
        // [{characteristic: [characteristic, characteristicId], characteristicInfo: ['A size too small', '1/2 a size too small, ...]}]
      }
    }
  }
  return characteristicsArray;
};

export default createCharacteristicsArray;