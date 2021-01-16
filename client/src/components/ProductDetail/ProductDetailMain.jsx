import React from 'react';

const ProductDetailMain = ({
  productList,
  currentProduct,
  currentProductId,
  currentStyleList,
  currentStyle,
  currentImage,
  thumbGallery,
}) => {
  return (
    <div className='product-display-container'>
      {/* {thumbGallery.map((photo) => (
        <img src={photo.thumbnail_url} alt='' />
      ))} */}
      {/* <img src={currentImage.url} alt='' /> */}
      {/* <pre className='product-info'>1.1.1 Product Information</pre>
      <pre className='style-selector'>1.1.2 Style Selector</pre>
      <pre className='add-cart'>1.1.3 Add to Cart</pre>
      <pre className='image-gallery'>1.1.4 Image Gallery</pre>
      <pre className='overview'>
        1.1.1.5 Product Overview - This free form text field may exist on some
        items. If it is available it should be displayed.
      </pre> */}
      <pre>{JSON.stringify(currentImage, null, 2)}</pre>
    </div>
  );
};

export default ProductDetailMain;
