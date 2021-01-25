import React from 'react';

const ProductOverview = ({ currentProduct }) => {
  return (
    <div className='overview-container answerBody'>
      <div className='description'>{currentProduct.description}</div>
      <div>
        <ul className='features'>
          {currentProduct.hasOwnProperty('features')
            ? currentProduct.features.map((feature, i) => (
                <li key={i} className='answerBody'>
                  {`${feature.feature}: ${feature.value}`}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ProductOverview;
