import React from 'react';

const StyleSelector = ({ currentStyleList, currentStyle, styleChange }) => (
  <div className='style-selector'>
    <div className='style-name'>{currentStyle.name}</div>
    {currentStyleList.map((style, i) => (
      <button
        onClick={styleChange}
        className='thumbnail thumb-round'
        key={style.style_id}
        width='50px'
        height='50px'
        value={JSON.stringify(style)}
        style={{
          backgroundImage: `url(${style.photos[0].thumbnail_url})`,
        }}
      ></button>
    ))}
  </div>
);

export default StyleSelector;
