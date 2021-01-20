import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import ThumbGallery from '../../containers/productDetails/ThumbGalleryContainer.js';
import { CSSTransition } from 'react-transition-group';
import { Zoom } from '@material-ui/core';
const ImageGallery = ({
  currentImage,
  thumbGallery,
  selectImage,
  currentImageIndex,
  view,
  toggleView,
}) => {
  const scroll = (direction) => {
    const newIndex = currentImageIndex + direction;
    selectImage(thumbGallery[newIndex].url, newIndex);
  };
  return (
    <div className='image-gallery'>
      <div className='current-image-container'>
        {view ? (
          <div className='expanded-view'>
            <InnerImageZoom src={currentImage} zoomScale={2.5} sizes='60vh' />
          </div>
        ) : (
          <div
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
        )}
      </div>
      <ThumbGallery />
      <button className='expand-btn btn' onClick={() => toggleView(view)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='10'
          height='10'
          fill='currentColor'
          className='bi bi-fullscreen'
          viewBox='0 0 16 16'
        >
          <path d='M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z' />
        </svg>
      </button>
      <button
        disabled={currentImageIndex === 0 ? true : false}
        className='left-btn carousel-btn btn'
        onClick={(e) => {
          const newIndex = currentImageIndex - 1;
          selectImage(thumbGallery[newIndex].url, newIndex);
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
    </div>
  );
};

export default ImageGallery;
