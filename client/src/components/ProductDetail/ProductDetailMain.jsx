import React from 'react';

const ProductDetailMain = ({ productList }) => {
  console.log('prl', productList);
  return (
    <div className='product-display-container'>
      {/* <pre className='product-info'>1.1.1 Product Information</pre>
    <pre className='style-selector'>1.1.2 Style Selector</pre>
    <pre className='add-cart'>1.1.3 Add to Cart</pre>
    <pre className='image-gallery'>1.1.4 Image Gallery</pre>
    <pre className='overview'>
      1.1.1.5 Product Overview - This free form text field may exist on some
      items. If it is available it should be displayed.
    </pre> */}
      <pre>{JSON.stringify(productList, null, 2)}</pre>
    </div>
  );
};

export default ProductDetailMain;
