import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import ThumbGallery from '../../containers/productDetails/ThumbGalleryContainer.js';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ViewButton from './ViewButton.jsx';
import ScrollButton from './ScrollButton.jsx';

const ImageGallery = ({
  currentImage,
  thumbGallery,
  selectImage,
  currentImageIndex,
}) => {
  const [openA, setOpenA] = useState(false);

  const handleOpenA = () => {
    setOpenA(true);
  };

  const handleCloseA = () => {
    setOpenA(false);
  };
  const scroll = (direction) => {
    const newIndex = currentImageIndex + direction;
    selectImage(thumbGallery[newIndex].url, newIndex);
  };

  return (
    <div className='image-gallery'>
      <div className='current-image-container'>
        <div
          onClick={handleOpenA}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            className='main-image'
            style={{
              backgroundImage: `url(${currentImage})`,
            }}
          ></div>
        </div>
      </div>
      <ThumbGallery />
      <ViewButton classList='expand-btn btn' handleClick={handleOpenA} />
      <ScrollButton
        currentImageIndex={currentImageIndex}
        classList='left-btn carousel-btn btn'
        scroll={scroll}
      />
      <ScrollButton
        thumbGallery={thumbGallery}
        currentImageIndex={currentImageIndex}
        classList='right-btn carousel-btn btn'
        left={false}
        scroll={scroll}
      />
      <Modal open={openA} onClose={handleCloseA}>
        <Fade in={openA}>
          <div className='image-modal'>
            <ScrollButton
              currentImageIndex={currentImageIndex}
              classList='carousel-btn btn zoom-left-btn'
              scroll={scroll}
            />
            <ScrollButton
              thumbGallery={thumbGallery}
              currentImageIndex={currentImageIndex}
              classList='zoom-right-btn carousel-btn btn'
              left={false}
              scroll={scroll}
            />
            <InnerImageZoom src={currentImage} zoomScale={2.5} sizes='60vh' />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageGallery;
