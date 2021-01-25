import React, { useState } from 'react';
import ThumbCard from './ThumbCard.jsx';
import ArrowButton from './UpDownButton.jsx';

const ThumbGallery = ({ thumbGallery, selectImage, currentImageIndex }) => {
  let cardContainer = null;
  const [imageIndex, setImageIndex] = useState(currentImageIndex);

  const scroll = (direction) => {
    const nextIndex = imageIndex + direction;
    cardContainer.style.transitionDuration = '0.5s';
    cardContainer.style.transform = `translateY(-${89 * nextIndex}px)`;
    setImageIndex(nextIndex);
  };

  return (
    <div>
      {thumbGallery.length > 6 ? (
        <div className='thumb-gallery'>
          <ArrowButton
            direction={-1}
            disabledIndex={imageIndex === 0}
            scroll={scroll}
          />
          <div className='gallery-port'>
            <div
              ref={(element) => (cardContainer = element)}
              className='gallery-card'
            >
              {thumbGallery.map((pic, i) => (
                <ThumbCard
                  selectImage={selectImage}
                  index={i}
                  key={i}
                  photo={pic}
                />
              ))}
            </div>
          </div>
          <ArrowButton
            direction={1}
            disabled={imageIndex === thumbGallery.length - 6}
            scroll={scroll}
            up={false}
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};
export default ThumbGallery;
