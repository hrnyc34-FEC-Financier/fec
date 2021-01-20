import React from 'react';

const AddToCart = ({ currentStyle, sizeChange, currentSku }) => {
  const skus = (() =>
    currentStyle.hasOwnProperty('skus')
      ? Object.entries(currentStyle.skus)
      : [])();

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
    <div className='add-cart'>
      <form action=''>
        <select
          name='size'
          className='checkout-form-item'
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
        <input
          type='submit'
          className='checkout-form-item'
          value='ADD TO BAG                    +'
        />
        <input type='submit' className='checkout-form-item' value='*' />
      </form>
    </div>
  );
};

export default AddToCart;

const style = {
  style_id: 51158,
  name: 'Forest Green & Black',
  original_price: '140.00',
  sale_price: null,
  'default?': true,
  skus: {
    295408: { quantity: 8, size: 'XS' },
    295409: { quantity: 16, size: 'S' },
    295410: { quantity: 17, size: 'M' },
    295411: { quantity: 10, size: 'L' },
    295412: { quantity: 15, size: 'XL' },
    295413: { quantity: 4, size: 'XL' },
  },
  photos: [
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    },
    {
      thumbnail_url:
        'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      url:
        'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
    },
  ],
};

const product = {
  id: 11001,
  campus: 'hrnyc',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description:
    'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-01-12T21:17:59.200Z',
  updated_at: '2021-01-12T21:17:59.200Z',
  features: [
    { feature: 'Fabric', value: 'Canvas' },
    { feature: 'Buttons', value: 'Brass' },
  ],
};
