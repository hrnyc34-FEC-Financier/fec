import { connect } from 'react-redux';
import setSelectedImage from '../../actions/productDetail/selectImage';
import ImageGallery from '../../components/ProductDetail/ImageGallery.jsx';

const mapDispatchToProps = (dispatch) => ({
  selectImage: (image, i) => dispatch(setSelectedImage(image, i)),
});

const mapStateToProps = (state) => ({
  currentImage: state.currentImage,
  thumbGallery: state.thumbGallery,
  currentImageIndex: state.currentImageIndex,
});

const ImageGalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);

export default ImageGalleryContainer;
