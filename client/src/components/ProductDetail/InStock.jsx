import React, { useState } from 'react';

const InStock = ({
  currentStyle,
  sizeChange,
  currentSku,
  favorite,
  checkout,
}) => {
  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const skus = (() =>
    currentStyle.hasOwnProperty('skus')
      ? Object.entries(currentStyle.skus)
      : [])();

  const submitToCart = (e) => {
    e.preventDefault();
    if (currentSku === '') {
      setSizeNotSelected(true);
    } else {
      if (sizeNotSelected) {
        setSizeNotSelected(false);
      }
      checkout(skus[currentSku][0]);
    }
  };
  const quantities = (() => {
    if (currentSku !== '') {
      const range = Math.min(skus[parseInt(currentSku, 10)][1].quantity, 15);
      const quantities = [];
      for (let amount = 1; amount <= range; amount++) {
        quantities.push(amount);
      }
      return quantities;
    }
  })();

  return (
    <form action=''>
      <select
        name='size'
        className='checkout-form-item size-select'
        onChange={sizeChange}
      >
        <option value=''>SELECT SIZE</option>
        {currentStyle.hasOwnProperty('skus')
          ? skus.map((sku, i) =>
              sku[1].quantity > 0 ? (
                <option key={sku[0]} value={i}>
                  {sku[1].size}
                </option>
              ) : null
            )
          : null}
      </select>
      {currentSku === '' ? (
        <select
          className='quantity checkout-form-item'
          disabled
          name='quantity'
          id=''
        >
          <option value=''>-</option>
        </select>
      ) : (
        <select className='quantity checkout-form-item' name='quantity' id=''>
          {quantities.map((amount) => (
            <option key={amount} value={amount}>
              {amount}
            </option>
          ))}
        </select>
      )}
      {sizeNotSelected ? <div>Please select size</div> : null}
      <input
        type='submit'
        className='checkout-form-item'
        value='ADD TO BAG                    +'
        onClick={submitToCart}
      />
      <button className='checkout-form-item' onClick={favorite}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'
        >
          <path d='M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z' />
        </svg>
      </button>
    </form>
  );
};

export default InStock;
