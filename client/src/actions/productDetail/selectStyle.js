import changeGallery from './thumbGallery.js';
import changeImage from './currentImage.js';
import changeStyle from './currentStyle.js';
import changeSize from './currentSize.js';
import changeImageIndex from './currentImageIndex.js';
import setSelectedImage from './selectImage.js';

const setSelectedStyle = (selectedStyleData) => {
  return (dispatch) => {
    dispatch(changeStyle(selectedStyleData));
    dispatch(changeGallery(selectedStyleData.photos));
    dispatch(setSelectedImage(selectedStyleData.photos[0].url, 0));
    dispatch(changeSize(''));
  };
};

export default setSelectedStyle;
