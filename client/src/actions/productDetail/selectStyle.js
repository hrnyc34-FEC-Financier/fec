import changeGallery from './thumbGallery.js';
import changeImage from './currentImage.js';
import changeStyle from './currentStyle.js';

const setSelectedStyle = (selectedStyleData) => {
  return (dispatch) => {
    dispatch(changeStyle(selectedStyleData));
    dispatch(changeGallery(selectedStyleData.photos));
    dispatch(changeImage(selectedStyleData.photos[0]));
  };
};

export default setSelectedStyle;
