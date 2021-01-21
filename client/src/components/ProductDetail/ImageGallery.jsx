import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import ThumbGallery from '../../containers/productDetails/ThumbGalleryContainer.js';
import { Modal } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import ViewButton from './ViewButton.jsx';
// import ImageCard from './ImageCard.jsx';
const ImageGallery = ({
  currentImage,
  thumbGallery,
  selectImage,
  currentImageIndex,
}) => {
  const [openA, setOpenA] = useState(false);
  // let cardContainer = null;
  const handleOpenA = () => {
    setOpenA(true);
  };

  const handleCloseA = () => {
    setOpenA(false);
  };
  const scroll = (direction) => {
    const newIndex = currentImageIndex + direction;
    selectImage(thumbGallery[newIndex].url, newIndex);
    // cardContainer.style.transitionDuration = '0.5s';
    // cardContainer.style.transform = `translate(-${43.75 * newIndex}vw)`;
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
        {/* for animations 
        <div
          ref={(element) => {
            cardContainer = element;
          }}
          className='card-container'
        >
          {thumbGallery.map((pic, i) => (
            <ImageCard key={pic.thumbnail_url} number={i} image={pic.url} />
          ))}
        </div> */}
      </div>
      <ThumbGallery />
      <ViewButton classList='expand-btn btn' handleClick={handleOpenA} />
      <button
        disabled={currentImageIndex === 0 ? true : false}
        className='left-btn carousel-btn btn'
        onClick={() => {
          scroll(-1);
        }}
      >
        <svg
          // xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          className='bi bi-arrow-left-short'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
          />
        </svg>
      </button>
      <button
        disabled={currentImageIndex === thumbGallery.length - 1 ? true : false}
        className='right-btn carousel-btn btn'
        onClick={() => {
          scroll(1);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          className='bi bi-arrow-right-short'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
          />
        </svg>
      </button>
      <Modal open={openA} onClose={handleCloseA}>
        <Fade in={openA}>
          <div className='image-modal'>
            <InnerImageZoom src={currentImage} zoomScale={2.5} sizes='60vh' />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ImageGallery;
