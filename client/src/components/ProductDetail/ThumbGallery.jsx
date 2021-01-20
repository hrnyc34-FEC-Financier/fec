import React from 'react';

const ThumbGallery = ({ thumbGallery, selectImage }) => (
  <div className='thumb-gallery'>
    {thumbGallery.map((pic, i) => {
      return (
        <button
          onClick={(e) => {
            selectImage(e.target.value, i);
          }}
          value={pic.url}
          className='thumbnail thumb-square'
          key={i}
          style={{
            backgroundImage: `url(${pic.thumbnail_url})`,
          }}
        ></button>
      );
    })}
  </div>
);
export default ThumbGallery;
