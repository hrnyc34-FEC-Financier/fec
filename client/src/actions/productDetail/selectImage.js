import changeImage from './currentImage.js';
import changeImageIndex from './currentImageIndex.js';

const setSelectedImage = (image, index) => {
  return (dispatch) => {
    dispatch(changeImage(image));
    dispatch(changeImageIndex(index));
  };
};

export default setSelectedImage;
