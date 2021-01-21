import React from 'react';

const RelatedItemModal = ({ currentProduct, previewItem }) => {
  console.log('currentProduct:', currentProduct );
  console.log('previewItem:', previewItem );

  return (
    <div id="comparingPage">
      <h1>{currentProduct.name}</h1>
      <div id="comparingPage_container">
        Comparing<br /><br />
        Current product vs Comparing product<br /><br />
         &#10003;  list 1  &#10003;<br />
         &#10003;  list 2  &#10003;<br />
      </div>
      <span id='close_X'> x </span>
    </div>
  );
};
export default RelatedItemModal;