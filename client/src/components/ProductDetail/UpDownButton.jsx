import React from 'react';

const UpDownButton = ({
  up = true,
  disabled,
  scroll,
  direction,
  classList,
}) => (
  <button
    className={`up-down-btn ${classList}`}
    disabled={disabled ? true : false}
    onClick={() => scroll(direction)}
  >
    {up ? (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
        />
      </svg>
    ) : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
        />
      </svg>
    )}
  </button>
);

export default UpDownButton;
