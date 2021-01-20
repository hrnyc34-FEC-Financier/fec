import React from 'react';

const ImageCard = ({ number, image }) => {
  return (
    <button
      className='image-card'
      style={{
        backgroundImage: `url(${image})`,
        // width: ``,
      }}
    ></button>
  );
};

export default ImageCard;
