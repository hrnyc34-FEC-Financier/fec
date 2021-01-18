import React from 'react';

const StyleSelector = ({ currentStyleList, currentStyle }) => (
  <div className='style-selector'>
    <div className='style-name'>{currentStyle.name}</div>
    {currentStyleList.map((style, i) => (
      <div
        className='thumbnail thumb-round'
        key={style.style_id}
        width='50px'
        height='50px'
        style={{
          backgroundImage: `url(${style.photos[0].thumbnail_url})`,
        }}
      ></div>
    ))}
  </div>
);

export default StyleSelector;
