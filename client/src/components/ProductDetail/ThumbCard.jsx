import React from 'react';
const ThumbCard = ({ selectImage, index, photo }) => (
  <button
    onClick={(e) => {
      selectImage(e.target.value, index);
    }}
    value={photo.url}
    className='thumbnail thumb-square'
    style={{
      backgroundImage: `url(${photo.thumbnail_url})`,
    }}
  ></button>
);

export default ThumbCard;
