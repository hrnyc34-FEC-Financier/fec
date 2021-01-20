import React from 'react';
import ImageCard from './ImageCard.jsx';

const style = {
  viewPort: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    height: '200px',
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
  },
};

const Carousel = ({
  currentImage,
  thumbGallery,
  selectImage,
  currentImageIndex,
}) => {
  let cardContainer = null;
  let viewPort = null;
  const scroll = (direction) => {
    const nextImage = currentImageIndex + direction;
    selectImage(nextImage);
    cardContainer.style.transitionDuration = '0.5s';
    cardContainer.style.transform = `translate(-${500 * nextImage}px)`;
  };

  return (
    <div className='image-gallery'>
      <button
        onClick={() => scroll(-1)}
        disabled={currentImageIndex > 0 ? false : true}
      >
        Left
      </button>
      <button
        onClick={() => scroll(1)}
        disabled={currentImageIndex < thumbGallery.length - 1 ? false : true}
      >
        Right
      </button>

      <div
        className='view-port'
        ref={(element) => {
          viewPort = element;
        }}
      >
        <div
          ref={(element) => {
            cardContainer = element;
          }}
          className='card-container'
        >
          {thumbGallery.map((pic, i) => (
            <ImageCard
              key={pic.thumbnail_url}
              number={i}
              vpWidth={viewPort.style.width}
              image={pic.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
