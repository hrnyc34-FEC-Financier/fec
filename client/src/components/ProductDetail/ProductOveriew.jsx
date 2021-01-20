import React from 'react';

const ProductOverview = ({ currentProduct }) => {
  console.log(currentProduct);
  return (
    <div className='overview'>
      <div>{currentProduct.description}</div>
      <div>
        <ul>
          {currentProduct.hasOwnProperty('features')
            ? currentProduct.features.map((feature) => (
                <li>{`${feature.feature}: ${feature.value}`}</li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ProductOverview;
// const product = {
//   id: 11001,
//   campus: 'hrnyc',
//   name: 'Camo Onesie',
//   slogan: 'Blend in to your crowd',
//   description:
//     'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//   category: 'Jackets',
//   default_price: '140.00',
//   created_at: '2021-01-12T21:17:59.200Z',
//   updated_at: '2021-01-12T21:17:59.200Z',
//   features: [
//     { feature: 'Fabric', value: 'Canvas' },
//     { feature: 'Buttons', value: 'Brass' },
//   ],
// };
