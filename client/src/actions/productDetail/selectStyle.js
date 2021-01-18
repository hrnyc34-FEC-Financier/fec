import changeGallery from './thumbGallery.js';
import changeImage from './currentImage.js';
import changeStyle from './currentStyle.js';
import changeSize from './currentSize';

const setSelectedStyle = (selectedStyleData) => {
  return (dispatch) => {
    dispatch(changeStyle(selectedStyleData));
    dispatch(changeGallery(selectedStyleData.photos));
    dispatch(changeImage(selectedStyleData.photos[0].url));
    dispatch(changeSize(''));
  };
};

export default setSelectedStyle;
