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
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
  },
};

const scrollLeft = () => {};

const Carousel = ({
  currentImage,
  thumbGallery,
  selectImage,
  currentImageIndex,
}) => {
  let cardContainer;
  const scrollRight = () => {
    const nextImage = currentImageIndex + 1;
  };
  return (
    <div className='image-gallery'>
      <button onClick={scrollLeft}>Left</button>
      <button onClick={scrollRight}>Right</button>
      <div className='view-port' style={style.viewPort}>
        <div
          ref={(refId) => (cardContainer = refId)}
          className='card-container'
          style={style.cardContainer}
        >
          {thumbGallery.map((pic, i) => (
            <ImageCard key={pic.thumbnail_url} number={i} image={pic.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
