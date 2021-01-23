import React from 'react';

const ScrollButton = ({
  thumbGallery,
  currentImageIndex,
  classList,
  left = true,
  scroll,
}) => (
  <div>
    {left ? (
      <button
        disabled={currentImageIndex === 0 ? true : false}
        className={classList}
        onClick={() => {
          scroll(-1);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
          />
        </svg>
      </button>
    ) : (
      <button
        disabled={currentImageIndex === thumbGallery.length - 1 ? true : false}
        className={classList}
        onClick={() => {
          scroll(1);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path
            fillRule='evenodd'
            d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
          />
        </svg>
      </button>
    )}
  </div>
);
export default ScrollButton;
