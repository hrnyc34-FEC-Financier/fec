import React from 'react';

const styles = {
  imageCard: {
    width: '350px',
    height: '200px',
    backgroundColor: 'blue',
    border: '2px solid black',
    borderSize: 'border-box',
    fontSize: '2.5em',
    color: 'white',
  },
};

const ImageCard = ({ number, image }) => {
  return (
    <div className='image-card' style={styles.imageCard}>
      {number}
    </div>
  );
};

export default ImageCard;
