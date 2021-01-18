import { connect } from 'react-redux';
import changeImage from '../../actions/productDetail/currentImage.js';
import ImageGallery from '../../components/ProductDetail/ImageGallery.jsx';

const mapDispatchToProps = (dispatch) => ({
  selectImage: (image) => dispatch(changeImage(image)),
});

const mapStateToProps = (state) => ({
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
});

const ImageGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);

export default ImageGalleryContainer;
